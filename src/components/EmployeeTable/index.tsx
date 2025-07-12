import { useState } from "react";
import { useEmployees } from "../../hooks/useEmployees";
import { formatDate } from "../../utils/formatDate";
import { formatPhone } from "../../utils/formatPhone";
import EmployeePhoto from "../EmployeePhoto";
import SearchInput from "../SearchInput";
import "./styles.css";

const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { employees, loading, error } = useEmployees(searchTerm);

  return (
    <>
      <div className="table-header">
        <h1>Funcionários</h1>
        <SearchInput onSearch={setSearchTerm} />
      </div>

      <div className="table-wrapper">
        {loading && <p className="status-message">Carregando...</p>}
        {error && <p className="status-message">{error}</p>}

        {!loading && !error && employees.length === 0 && (
          <p className="status-message">Nenhum colaborador encontrado.</p>
        )}

        {!loading && !error && employees.length > 0 && (
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
              {employees.map((emp, index) => (
                <div className="row" key={index}>
                  <div className="cell">
                    <div className="photo-placeholder">
                      <EmployeePhoto name={emp.name} image={emp.image} />
                    </div>
                  </div>
                  <div className="cell">{emp.name}</div>
                  <div className="cell">{emp.job}</div>
                  <div className="cell">
                    {formatDate(emp.admission_date)}
                  </div>
                  <div className="cell">{formatPhone({ phone: emp.phone })}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeTable;
