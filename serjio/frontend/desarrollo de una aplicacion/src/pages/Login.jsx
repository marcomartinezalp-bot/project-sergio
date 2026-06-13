import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('')
    // Enviar credenciales al backend
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo: email, password })
    })
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Error de autenticación')
        setMessage(`Has iniciado sesión como ${data.usuario.nombre}`)
      })
      .catch((err) => setMessage(err.message))
  }

  return (
    <div className="form-card">
      <h2 className="title">Iniciar Sesión</h2>
      <p className="page-text">Ingresa tu correo y contraseña para entrar.</p>
      <form onSubmit={handleSubmit} className="form-group">
        <label>
          Correo electrónico
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <button type="submit" className="form-button">
          Entrar
        </button>
      </form>
      {message && <p className="page-text">{message}</p>}
    </div>
  )
}

export default Login;
