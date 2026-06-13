import { useState } from 'react'

function Register({ setActivePage }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('Registrando...')

    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: name, correo: email, password }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar')
      }

      setMessage(`✓ ${data.message}`)
      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      setMessage(`✗ ${error.message}`)
    }
  }

  return (
    <div className="form-card">
      <h2 className="title">Registrarse</h2>
      <p className="page-text">Crea una cuenta nueva para acceder a la app.</p>
      <form onSubmit={handleSubmit} className="form-group">
        <label>
          Nombre
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </label>
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
          Crear cuenta
        </button>
      </form>
      <button
        type="button"
        className="form-button secondary"
        onClick={() => setActivePage('login')}
      >
        Ya tengo cuenta, iniciar sesión
      </button>
      {message && <p className="page-text">{message}</p>}
    </div>
  )
}

export default Register;
