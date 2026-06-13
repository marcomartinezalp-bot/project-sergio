import { useState, useEffect } from "react";

const STORAGE_KEY = "profesoresList";

function Inicio() {
  const [profesores, setProfesores] = useState([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProfesores(JSON.parse(stored));
    }
    setCargado(true);
  }, []);

  useEffect(() => {
    if (!cargado) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profesores));
  }, [profesores, cargado]);

  const handleAttendance = (id, estado) => {
    setProfesores(
      profesores.map((prof) =>
        prof.id === id ? { ...prof, asistencia: estado } : prof
      )
    );
  };

  const asistenciasHoy = profesores.filter((prof) => prof.asistencia === "asistio").length;

  return (
    <>
      <h2 className="title">INICIO</h2>
      <h2 className="subtitle">RESUMEN</h2>

      <div className="cards">
        <div className="card">
          <p>Profesores registrados</p>
          <h1>{profesores.length}</h1>
        </div>

        <div className="card">
          <p>Asistencias hoy</p>
          <h1>{asistenciasHoy}</h1>
        </div>

        <div className="card alerta">
          <p>Faltantes hoy</p>
          <h1>{profesores.filter((prof) => prof.asistencia === "falto").length}</h1>
        </div>

        <div className="card">
          <p>Clases cubiertas</p>
          <h1>00</h1>
        </div>
      </div>

      <div className="professors-list">
        {profesores.length === 0 ? (
          <p className="page-text">No hay profesores registrados aún.</p>
        ) : (
          profesores.map((prof) => (
            <div key={prof.id} className="professor-card">
              <div className="professor-photo">
                {prof.foto ? <img src={prof.foto} alt={prof.nombre} /> : <div className="no-photo">Sin foto</div>}
              </div>
              <div className="professor-info">
                <div className="prof-name">{prof.nombre}</div>
                <div className="prof-meta">{prof.materia} {prof.email && `· ${prof.email}`}</div>
              </div>
              <div className="professor-actions">
                <button
                  type="button"
                  className={`attendance-button asistio ${prof.asistencia === "asistio" ? "active" : ""}`}
                  onClick={() => handleAttendance(prof.id, "asistio")}
                >
                  Asistió
                </button>
                <button
                  type="button"
                  className={`attendance-button falto ${prof.asistencia === "falto" ? "active" : ""}`}
                  onClick={() => handleAttendance(prof.id, "falto")}
                >
                  Faltó
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Inicio;
