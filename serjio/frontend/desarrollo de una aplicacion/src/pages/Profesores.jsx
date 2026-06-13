import { useState, useEffect } from "react";

const STORAGE_KEY = "profesoresList";

function Profesores() {
  const [profesores, setProfesores] = useState([]);
  const [nombre, setNombre] = useState("");
  const [materia, setMateria] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState(null);
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

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setFoto(reader.result);
    reader.readAsDataURL(file);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!nombre.trim()) return;
    const nuevo = { id: Date.now(), nombre, materia, email, foto, asistencia: null };
    setProfesores([nuevo, ...profesores]);
    setNombre("");
    setMateria("");
    setEmail("");
    setFoto(null);
  }

  function handleAttendance(id, estado) {
    setProfesores(
      profesores.map((prof) =>
        prof.id === id ? { ...prof, asistencia: estado } : prof
      )
    );
  }

  function handleRemove(id) {
    setProfesores(profesores.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h2 className="title">PROFESORES</h2>
      <p className="page-text">Aquí puedes mostrar los datos de los profesores.</p>

      <form className="prof-form" onSubmit={handleAdd}>
        <input className="form-input" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input className="form-input" placeholder="Materia" value={materia} onChange={(e) => setMateria(e.target.value)} />
        <input className="form-input" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

        <div className="upload-controls small">
          <input id="prof-file" type="file" accept="image/*" onChange={handleFileChange} />
          <label htmlFor="prof-file" className="filepicker">
            <span className="filepicker-icon">📷</span>
            <span className="filepicker-text">Foto</span>
          </label>
          <div className="file-name">{foto ? "Imagen seleccionada" : "Sin foto"}</div>
        </div>

        <button className="form-button" type="submit">Agregar profesor</button>
      </form>

      <div className="professors-list">
        {profesores.length === 0 && <p className="page-text">No hay profesores agregados.</p>}
        {profesores.map((p) => (
          <div key={p.id} className="professor-card">
            <div className="professor-photo">
              {p.foto ? <img src={p.foto} alt={p.nombre} /> : <div className="no-photo">Sin foto</div>}
            </div>
            <div className="professor-info">
              <div className="prof-name">{p.nombre}</div>
              <div className="prof-meta">{p.materia} {p.email && `· ${p.email}`}</div>
            </div>
            <div className="professor-actions">
              <div className="attendance-buttons">
                <button
                  type="button"
                  className={`attendance-button asistio ${p.asistencia === "asistio" ? "active" : ""}`}
                  onClick={() => handleAttendance(p.id, "asistio")}
                >
                  Asistió
                </button>
                <button
                  type="button"
                  className={`attendance-button falto ${p.asistencia === "falto" ? "active" : ""}`}
                  onClick={() => handleAttendance(p.id, "falto")}
                >
                  Faltó
                </button>
              </div>
              <button className="remove-button" onClick={() => handleRemove(p.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profesores;
