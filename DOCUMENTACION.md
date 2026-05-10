# 📋 Documentación del Proyecto Sergio

## 📌 Descripción General

El **Proyecto Sergio** es una aplicación web full-stack diseñada para gestionar usuarios, horarios, profesores y notificaciones. La aplicación consta de un backend robusto con Node.js/Express y una interfaz frontend intuitiva con HTML, CSS y JavaScript.

---

## 🏗️ Estructura del Proyecto

```
projecto de sergio/
├── index.html                 # Página principal
├── package.json              # Dependencias del proyecto
├── README.md                 # Información del proyecto
├── DOCUMENTACION.md          # Este archivo
└── serjio/
    ├── backend/              # Backend - API REST
    │   ├── app.js            # Configuración principal
    │   ├── package.json      # Dependencias del backend
    │   ├── config/
    │   │   └── db.js         # Configuración de MongoDB
    │   ├── controllers/
    │   │   ├── usuarioController.js    # Lógica de usuarios
    │   │   └── javascript.js           # Controlador adicional
    │   ├── models/
    │   │   └── Usuarios.js   # Esquema de MongoDB
    │   ├── routes/
    │   │   └── routes.js     # Rutas de la API
    │   └── validator/
    │       ├── errorHandler.js    # Manejo de errores
    │       └── validation.js      # Validación de datos
    └── frontend/             # Frontend - Interfaz de usuario
        ├── css/
        │   └── estilo.css    # Estilos generales
        ├── js/
        │   └── as.js         # Lógica de JavaScript
        └── views/
            ├── horarios.html       # Vista de horarios
            ├── inicio.html         # Página de inicio
            ├── notificaciones.html # Centro de notificaciones
            └── profesores.html     # Vista de profesores
```

---

## 🛠️ Stack Tecnológico

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** (v5.2.1) - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** (v9.5.0) - ODM para MongoDB
- **JWT** (jsonwebtoken v9.0.3) - Autenticación
- **bcryptjs** (v3.0.3) - Encriptación de contraseñas
- **Express Validator** (v7.3.2) - Validación de datos
- **Helmet** (v8.1.0) - Seguridad HTTP
- **Multer** (v2.1.1) - Manejo de archivos
- **Morgan** (v1.10.1) - Logging
- **CORS** (v2.8.6) - Control de acceso

### Frontend
- **HTML5** - Estructura
- **CSS3** - Estilos
- **JavaScript Vanilla** - Interactividad
- **Axios** - Cliente HTTP

---

## 🚀 Guía de Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- MongoDB (local o Atlas)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL_del_repositorio>
   cd "projecto de serjio"
   ```

2. **Instalar dependencias del proyecto raíz**
   ```bash
   npm install
   ```

3. **Instalar dependencias del backend**
   ```bash
   cd serjio/backend
   npm install
   ```

4. **Configurar variables de entorno**
   Crear archivo `.env` en `serjio/backend/`:
   ```
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/proyecto-sergio
   JWT_SECRET=tu_clave_secreta_aqui
   ```

5. **Iniciar el servidor**
   ```bash
   npm start
   ```
   El servidor estará disponible en `http://localhost:3000`

---

## 📡 API REST

### Endpoints Disponibles

#### **Usuarios**

- **Crear Usuario**
  ```
  POST /api/usuarios
  ```
  **Body:**
  ```json
  {
    "nombre": "Juan Pérez",
    "correo": "juan@example.com",
    "password": "contraseña123"
  }
  ```
  **Respuesta (201):**
  ```json
  {
    "_id": "60d5ec49c1234567890abcde",
    "nombre": "Juan Pérez",
    "correo": "juan@example.com",
    "password": "contraseña_encriptada"
  }
  ```

- **Obtener Todos los Usuarios**
  ```
  GET /api/usuarios
  ```
  **Respuesta (200):**
  ```json
  [
    {
      "_id": "60d5ec49c1234567890abcde",
      "nombre": "Juan Pérez",
      "correo": "juan@example.com",
      "password": "contraseña_encriptada"
    }
  ]
  ```

---

## 📊 Modelo de Datos

### Usuario
```javascript
{
  nombre: String,      // Nombre del usuario
  correo: String,      // Email único
  password: String     // Contraseña encriptada
}
```

---

## 🔐 Seguridad

El proyecto implementa varias capas de seguridad:

- ✅ **JWT** para autenticación de usuarios
- ✅ **bcryptjs** para encriptación de contraseñas
- ✅ **Helmet** para headers HTTP seguros
- ✅ **CORS** para control de origen
- ✅ **Express Validator** para validación de entrada

---

## 🖼️ Vistas Frontend

### 1. **Inicio (inicio.html)**
- Página principal de la aplicación
- Punto de entrada para usuarios

### 2. **Horarios (horarios.html)**
- Gestión y visualización de horarios
- Calendario de disponibilidad

### 3. **Profesores (profesores.html)**
- Listado de profesores
- Información de contacto

### 4. **Notificaciones (notificaciones.html)**
- Centro de notificaciones
- Alertas del sistema

---

## 💻 Estructura del Backend

### app.js
Archivo principal que configura el servidor Express:
- Carga de configuración de base de datos
- Middleware (CORS, Morgan, JSON)
- Definición de rutas API
- Inicio del servidor en puerto 3000

### routes/routes.js
Define las rutas disponibles:
```
POST   /api/usuarios  → crearUsuario
GET    /api/usuarios  → obtenerUsuarios
```

### controllers/usuarioController.js
Controlador con la lógica de negocio:
- `crearUsuario()` - Crear nuevo usuario
- `obtenerUsuarios()` - Listar todos los usuarios
- Validación con express-validator
- Manejo de errores con try-catch

### models/Usuarios.js
Define el esquema de MongoDB:
```javascript
{
  nombre: String,
  correo: String,
  password: String
}
```

### config/db.js
Configuración de conexión a MongoDB

---

## 📝 Variables de Entorno

Crear archivo `.env` en la carpeta `backend`:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/proyecto-sergio
JWT_SECRET=tu_clave_secreta_muy_fuerte
LOG_LEVEL=info
```

---

## 🐛 Mejoras Sugeridas

### Corto Plazo
- [ ] Agregar validación completa con express-validator en todas las rutas
- [ ] Implementar manejo de errores global
- [ ] Agregar autenticación JWT
- [ ] Encriptar contraseñas con bcryptjs

### Mediano Plazo
- [ ] Crear endpoints para profesores y horarios
- [ ] Implementar notificaciones en tiempo real (Socket.io)
- [ ] Agregar tests unitarios y de integración
- [ ] Documentar API con Swagger/OpenAPI

### Largo Plazo
- [ ] Migrar a TypeScript
- [ ] Implementar caché con Redis
- [ ] Agregar logs estructurados
- [ ] Implementar CI/CD
- [ ] Dockerizar la aplicación

---

## 🧪 Testing

Para ejecutar tests (cuando estén disponibles):
```bash
npm test
```

---

## 📚 Dependencias Principales

| Paquete | Versión | Función |
|---------|---------|---------|
| express | 5.2.1 | Framework web |
| mongoose | 9.5.0 | ODM MongoDB |
| jsonwebtoken | 9.0.3 | Autenticación |
| bcryptjs | 3.0.3 | Encriptación |
| dotenv | 17.4.2 | Variables de entorno |
| cors | 2.8.6 | Control de origen |
| helmet | 8.1.0 | Headers seguros |
| express-validator | 7.3.2 | Validación |
| morgan | 1.10.1 | Logging |
| multer | 2.1.1 | Upload de archivos |

---

## 🚨 Troubleshooting

### El servidor no inicia
- Verificar que MongoDB esté corriendo
- Comprobar archivo `.env`
- Verificar puerto 3000 disponible

### Error de conexión a BD
- Verificar URI de MongoDB en `.env`
- Comprobar credenciales
- Revisar firewall

### Error de CORS
- Verificar orígenes permitidos
- Revisar configuración de CORS en app.js

---

## 👥 Contribuidores

- Sergio (Propietario del proyecto)

---

## 📄 Licencia

Este proyecto está bajo licencia privada.

---

## 📞 Soporte

Para soporte técnico, contactar al equipo de desarrollo.

---

**Última actualización:** Mayo 2026
**Versión:** 1.0
