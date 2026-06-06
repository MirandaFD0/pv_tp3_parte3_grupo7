# TP3 - Parte 3: Gestión de Proyectos Educativos

Materia: Programación Visual  
Carrera: Analista Programador Universitario  
Facultad de Ingeniería - UNJu

## Integrantes del Grupo 7

- Camacho Leandro Abel Ezequiel - Github: [@leandrocamacho02](https://github.com/leandrocamacho02)
- Miranda Facundo David - Github: [@MirandaFD0](https://github.com/MirandaFD0)
- Porco Lucas Ricardo - Github: [@lucas777porco-ai](https://github.com/lucas777porco-ai)

## ¿De qué trata esta parte? 

En esta entrega trabajamos con el hook *useEffect* de React para controlar los efectos secundarios de la aplicación. La idea principal fue sincronizar los cambios en la lista de proyectos con un componente que muestra en tiempo real cuándo fue la última modificación.

## ¿Qué implementamos?

- Componente RegistroActividad que recibe la fecha y hora por props y la muestra al usuario
- useEffect configurado para ejecutarse solo cuando se agrega o elimina un proyecto
- useRef como bandera para evitar que el registro aparezca al cargar la página por primera vez
- Aislamiento del filtro de búsqueda para que no dispare el efecto secundario
- Componente FormularioProyecto extraído de ListaProyectos, con estado local propio y comunicación al padre mediante callback
## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS


