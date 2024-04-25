export interface CartaInterface {
    titulo: string
    secciones: Seccione[]
  }
  
  export interface Seccione {
    tituloSeccion: string
    platos: Plato[]
  }
  
  export interface Plato {
    nombre: string
    imagen: string
    precio: string
    descripcion?: string
  }