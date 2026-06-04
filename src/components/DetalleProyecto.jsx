const DetalleProyecto = ({ proyecto, onVolver }) => {
  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto

  return (
    <main>
      <div className="detalle-container">
        <button className="btn-detalle" onClick={onVolver}>← Volver</button>

        <h2>{titulo}</h2>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p><strong>Estado:</strong> {estado}</p>

        <h3>Descripción</h3>
        {descripcion.map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}

        <h3>Recursos</h3>
        <ul>
          {recursos.map((recurso, index) => (
            <li key={index}>
              <a href={recurso.url} target="_blank" rel="noreferrer">
                {recurso.tipo}
              </a>
            </li>
          ))}
        </ul>

        <h3>Equipo</h3>
        <ul>
          {equipo.map((miembro, index) => (
            <li key={index}>
              <strong>{miembro.nombre}</strong> — {miembro.rol}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default DetalleProyecto