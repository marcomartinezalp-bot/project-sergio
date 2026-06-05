import { useState } from 'react'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('Registrando...')

    try {
      const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: name, correo: email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Error al registrar')
      }

      const data = await response.json()
      setMessage(`Usuario ${data.nombre} registrado con ${data.correo}`)
      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      setMessage(error.message)
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
      {message && <p className="page-text">{message}</p>}
    </div>
  )
}

export default Register;
