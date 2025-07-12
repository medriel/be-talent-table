import { useEffect, useMemo, useState } from "react";
import { api } from "../../service/api";
import type { Employee } from "../../types/Employee";
import SearchInput from "../SearchInput";
import "./styles.css";


const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = useMemo(() => {
    if (!searchTerm.trim()) return employees;

    const term = searchTerm.toLowerCase();
    const termNumbersOnly = term.replace(/\D/g, '');

    return employees.filter((emp) => {
      const nameMatch = emp.name?.toLowerCase().includes(term);
      const jobMatch = emp.job?.toLowerCase().includes(term);
      const phoneMatch =
        termNumbersOnly.length > 0 &&
        emp.phone?.replace(/\D/g, '').includes(termNumbersOnly);

      return nameMatch || jobMatch || phoneMatch;
    });
  }, [employees, searchTerm]);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get<Employee[]>('/employees');
        setEmployees(response.data);
      } catch (err) {
        console.error(err)
        setError('Erro ao carregar colaboradores.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <p className="status-message">Carregando...</p>;
  }

  if (error) {
    return <p className="status-message">{error}</p>;
  }

  if (employees.length === 0) {
    return <p className="status-message">Nenhum colaborador encontrado.</p>;
  }
  function EmployeePhoto({ name, image }: { name: string; image: string }) {
    const [hasImage, setHasImage] = useState(false);

    const getInitials = (name: string) => {
      const [first, second] = name.split(" ");
      return (first?.[0] || "") + (second?.[0] || "");
    };

    useEffect(() => {
      if (!image || image.trim() === "") {
        setHasImage(false);
        return;
      }

      const img = new Image();
      img.src = image;
      img.onload = () => setHasImage(true);
      img.onerror = () => setHasImage(false);
    }, [image]);

    if (!hasImage) {
      return (
        <div className="avatar-fallback">
          {getInitials(name).toUpperCase()}
        </div>
      );
    }

    return <img src={image} alt={name} />;
  }


  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  function formatPhone(phone: string): string {
    if (!phone) return "-";

    let number = phone.startsWith("55") ? phone.slice(2) : phone;

    number = number.replace(/\D/g, "");

    if (number.length === 11) {
      const ddd = number.slice(0, 2);
      const part1 = number.slice(2, 7);
      const part2 = number.slice(7);
      return `(${ddd}) ${part1}-${part2}`;
    }

    if (number.length === 10) {
      const ddd = number.slice(0, 2);
      const part1 = number.slice(2, 6);
      const part2 = number.slice(6);
      return `(${ddd}) ${part1}-${part2}`;
    }

    return number;
  }

  return (
    <>
      <div className="table-header">
        <h1>Funcionários</h1>
        <SearchInput onSearch={setSearchTerm} />
      </div>

      <div className="table-wrapper">
        <div className="table-scroll">

          <div className="table-head">
            <div className="row">
              <div className="cell">FOTO</div>
              <div className="cell">NOME</div>
              <div className="cell">CARGO</div>
              <div className="cell">DATA DE ADMISSÃO</div>
              <div className="cell">TELEFONE</div>
            </div>
          </div>

          <div className="table-body">
            {filteredEmployees.map((emp, index) => (
              <div className="row" key={index}>
                <div className="cell">
                  <div className="photo-placeholder">
                    <EmployeePhoto name={emp.name} image={emp.image} />
                  </div>
                </div>
                <div className="cell">{emp.name}</div>
                <div className="cell">{emp.job}</div>
                <div className="cell">{formatDate(emp.admission_date)}</div>
                <div className="cell">{formatPhone(emp.phone)}</div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
