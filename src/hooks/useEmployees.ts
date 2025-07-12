import { useEffect, useMemo, useState } from "react";
import { api } from "../service/api";
import type { Employee } from "../types/Employee";
import { formatDate } from "../utils/formatDate";

export function useEmployees(searchTerm: string) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get<Employee[]>("/employees");
        setEmployees(response.data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar colaboradores.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = useMemo(() => {
    if (!searchTerm.trim()) return employees;

    const term = searchTerm.toLowerCase();
    const termNumbersOnly = term.replace(/\D/g, "");

    return employees.filter((emp) => {
      const nameMatch = emp.name?.toLowerCase().includes(term);
      const jobMatch = emp.job?.toLowerCase().includes(term);
      const phoneMatch =
        termNumbersOnly.length > 0 &&
        emp.phone?.replace(/\D/g, "").includes(termNumbersOnly);

      const admissionDateFormatted = formatDate(emp.admission_date);
      const dateMatch = admissionDateFormatted.includes(searchTerm) ||
        emp.admission_date.includes(searchTerm);

      return nameMatch || jobMatch || phoneMatch || dateMatch;
    });
  }, [employees, searchTerm]);


  return { employees: filteredEmployees, loading, error };
}
