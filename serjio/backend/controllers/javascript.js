import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/usuarios")
      .then(res => setUsuarios(res.data));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {usuarios.map(u => (
        <p key={u._id}>{u.nombre}</p>
      ))}
    </div>
  );
}

export default App;