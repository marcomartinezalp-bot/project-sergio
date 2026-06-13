import { useState, useEffect } from "react";

const STORAGE_KEY = "horariosImage";

function Horarios() {
  const [image, setImage] = useState(null);
  const [filename, setFilename] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setImage(stored);
  }, []);

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      localStorage.setItem(STORAGE_KEY, dataUrl);
      setImage(dataUrl);
      setFilename(file.name);
    };
    reader.readAsDataURL(file);
  }

  function removeImage() {
    localStorage.removeItem(STORAGE_KEY);
    setImage(null);
  }

  return (
    <>
      <h2 className="title">HORARIOS</h2>
      <p className="page-text">Aquí puedes mostrar los horarios de clases y actividades.</p>

      <div className="upload-controls">
        <div className="upload-left">
          <input id="horarios-file" type="file" accept="image/*" onChange={handleFileChange} />
          <label htmlFor="horarios-file" className="filepicker">
            <span className="filepicker-icon">📤</span>
            <span className="filepicker-text">Subir imagen</span>
          </label>
          {image && (
            <button type="button" onClick={removeImage} className="remove-button">Quitar imagen</button>
          )}
        </div>
        <div className="file-name">{filename || "Ningún archivo seleccionado"}</div>
      </div>

      <div className="horarios-image-wrapper">
        {image ? (
          <img src={image} alt="Horarios" className="horarios-image" />
        ) : (
          <div className="no-image">No hay imagen subida</div>
        )}
      </div>
    </>
  );
}

export default Horarios;
