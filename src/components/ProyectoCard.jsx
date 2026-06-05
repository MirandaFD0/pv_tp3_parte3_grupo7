const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { id, titulo, categoria, estado } = proyecto

  const badgeClase = estado === 'Finalizado' ? 'badge badge-finalizado' : 'badge badge-encurso'

  return (
    <article className="card">
      <h4>{titulo}</h4>
      <p><strong>Categoría:</strong> {categoria}</p>
      <span className={badgeClase}>{estado}</span>
      <button className="btn-eliminar" onClick={() => onEliminar(id)}>Eliminar</button>
      <button className="btn-detalle" onClick={() => onVerDetalle(proyecto)}>Ver detalle</button>
    </article>
  )
}

export default ProyectoCard