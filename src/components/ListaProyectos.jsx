import { useState } from "react"
import proyectoService from "../services/proyectoService"
import ProyectoCard from "./ProyectoCard"
import DetalleProyecto from "./DetalleProyecto"

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ['', ''],
    recursos: [
      { tipo: 'PDF', url: '' },
      { tipo: 'GitHub', url: '' },
      { tipo: 'Drive', url: '' }
    ],
    equipo: [{ nombre: '', rol: '' }]
  })

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id)
    setProyectos(proyectoService.obtenerProyectos())
  }

  const handleBuscar = (e) => {
    const { value } = e.target
    setBusqueda(value)
    setProyectos(proyectoService.buscarProyecto(value))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNuevoProyecto({ ...nuevoProyecto, [name]: value })
  }

  const handleDescripcion = (index, value) => {
    const nuevaDesc = [...nuevoProyecto.descripcion]
    nuevaDesc[index] = value
    setNuevoProyecto({ ...nuevoProyecto, descripcion: nuevaDesc })
  }

  const handleRecurso = (index, value) => {
    const nuevosRecursos = [...nuevoProyecto.recursos]
    nuevosRecursos[index] = { ...nuevosRecursos[index], url: value }
    setNuevoProyecto({ ...nuevoProyecto, recursos: nuevosRecursos })
  }

  const handleEquipo = (index, field, value) => {
    const nuevoEquipo = [...nuevoProyecto.equipo]
    nuevoEquipo[index] = { ...nuevoEquipo[index], [field]: value }
    setNuevoProyecto({ ...nuevoProyecto, equipo: nuevoEquipo })
  }

  const agregarMiembro = () => {
    setNuevoProyecto({
      ...nuevoProyecto,
      equipo: [...nuevoProyecto.equipo, { nombre: '', rol: '' }]
    })
  }

  const handleAgregar = () => {
    if (nuevoProyecto.titulo.trim() === '') return
    proyectoService.agregarProyecto({ ...nuevoProyecto, id: Date.now() })
    setProyectos(proyectoService.obtenerProyectos())
    setNuevoProyecto({
      titulo: '',
      categoria: '',
      estado: 'En curso',
      descripcion: ['', ''],
      recursos: [
        { tipo: 'PDF', url: '' },
        { tipo: 'GitHub', url: '' },
        { tipo: 'Drive', url: '' }
      ],
      equipo: [{ nombre: '', rol: '' }]
    })
  }

  if (proyectoSeleccionado) {
    return (
      <DetalleProyecto
        proyecto={proyectoSeleccionado}
        onVolver={() => setProyectoSeleccionado(null)}
      />
    )
  }

  return (
    <main>
      <h2>Listado de Proyectos</h2>

      <section className="filtros from-filtros">
        <h3>Buscar Proyecto</h3>
        <input
          type="text"
          placeholder="Buscá un proyecto..."
          value={busqueda}
          onChange={handleBuscar}
        />
      </section>

      <section className="filtros">
        <h3>Agregar Proyecto</h3>
        <div className="from-filtros">
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={nuevoProyecto.titulo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={nuevoProyecto.categoria}
            onChange={handleChange}
          />
          <select
            name="estado"
            value={nuevoProyecto.estado}
            onChange={handleChange}
          >
            <option value="En curso">En curso</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>

        <div className="from-filtros" style={{ marginTop: '15px' }}>
          <input
            type="text"
            placeholder="Párrafo 1"
            value={nuevoProyecto.descripcion[0]}
            onChange={(e) => handleDescripcion(0, e.target.value)}
          />
          <input
            type="text"
            placeholder="Párrafo 2"
            value={nuevoProyecto.descripcion[1]}
            onChange={(e) => handleDescripcion(1, e.target.value)}
          />
        </div>

        <div className="from-filtros" style={{ marginTop: '15px' }}>
          {nuevoProyecto.recursos.map((recurso, index) => (
            <input
              key={index}
              type="text"
              placeholder={`URL ${recurso.tipo}`}
              value={recurso.url}
              onChange={(e) => handleRecurso(index, e.target.value)}
            />
          ))}
        </div>

        <div style={{ marginTop: '15px' }}>
          {nuevoProyecto.equipo.map((miembro, index) => (
            <div key={index} className="from-filtros" style={{ marginBottom: '10px' }}>
              <input
                type="text"
                placeholder="Nombre"
                value={miembro.nombre}
                onChange={(e) => handleEquipo(index, 'nombre', e.target.value)}
              />
              <input
                type="text"
                placeholder="Rol"
                value={miembro.rol}
                onChange={(e) => handleEquipo(index, 'rol', e.target.value)}
              />
            </div>
          ))}
          <div className="from-filtros">
            <button onClick={agregarMiembro}>+ Agregar miembro</button>
            <button onClick={handleAgregar}>Agregar Proyecto</button>
          </div>
        </div>
      </section>

      <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Proyectos</h3>
      <section className="cards-container">
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={handleEliminar}
            onVerDetalle={setProyectoSeleccionado}
          />
        ))}
      </section>
    </main>
  )
}

export default ListaProyectos