import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(`Has iniciado sesión con ${email}`)
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
