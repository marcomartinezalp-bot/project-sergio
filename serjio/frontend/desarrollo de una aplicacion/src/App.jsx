import { useState } from 'react'
import './App.css'
import Inicio from './pages/Inicio'
import Horarios from './pages/Horarios'
import Profesores from './pages/Profesores'
import Notificaciones from './pages/Notificaciones'
import Login from './pages/Login'
import Register from './pages/Register'

const pages = {
  inicio: 'Inicio',
  horarios: 'Horarios',
  profesores: 'Profesores',
  notificaciones: 'Notificaciones',
  login: 'Ingresar',
  registro: 'Registrarse',
}

function App() {
  const [activePage, setActivePage] = useState('registro')

  const renderPage = () => {
    switch (activePage) {
      case 'horarios':
        return <Horarios />
      case 'profesores':
        return <Profesores />
      case 'notificaciones':
        return <Notificaciones />
      case 'login':
        return <Login setActivePage={setActivePage} />
      case 'registro':
        return <Register setActivePage={setActivePage} />
      default:
        return <Inicio />
    }
  }

  return (
    <>
      <div className="container">{renderPage()}</div>

      <div className="menu">
        <nav>
          <ul>
            {Object.entries(pages).map(([key, label]) => (
              <li key={key}>
                <button
                  type="button"
                  className={activePage === key ? 'menu-button active' : 'menu-button'}
                  onClick={() => setActivePage(key)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
