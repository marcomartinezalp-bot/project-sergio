function Inicio() {
  return (
    <>
      <h2 className="title">INICIO</h2>
      <h2 className="subtitle">RESUMEN</h2>

      <div className="cards">
        <div className="card">
          <p>Asistencias hoy</p>
          <h1>42</h1>
        </div>

        <div className="card alerta">
          <p>Faltantes hoy</p>
          <h1>03</h1>
        </div>

        <div className="card">
          <p>Clases cubiertas</p>
          <h1>02</h1>
        </div>
      </div>
    </>
  )
}

export default Inicio;
