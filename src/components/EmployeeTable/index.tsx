import SearchContainer from "../SearchContainer";
import "./styles.css";

const employees = [
  { name: "Giovana L. Arruda", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Vanessa Machado", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Juliana Borba", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Josiane Dias", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Reginaldo Felipe", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Grabriel D.", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Silvio de Carvalho", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Ormar A. Amaral", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "João Pedro Farias", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
  { name: "Caroline Rocha da Silva", role: "Front-end", photo: "", phone: "+55 (55) 55555-555", admission: "00/00/0000" },
];

const EmployeeTable = () => {
  return (
    <>
      <SearchContainer />

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
            {employees.map((emp, index) => (
              <div className="row" key={index}>
                <div className="cell">
                  <div className="photo-placeholder">
                    {emp.photo ? (
                      <img src={emp.photo} alt={emp.name} />
                    ) : (
                      <div className="no-photo">Foto</div>
                    )}
                  </div>
                </div>
                <div className="cell">{emp.name}</div>
                <div className="cell">{emp.role}</div>
                <div className="cell">{emp.admission}</div>
                <div className="cell">{emp.phone}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
