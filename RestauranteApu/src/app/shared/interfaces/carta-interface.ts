export interface CartaInterface {
    titulo: string
    secciones: Seccion[]
  }
  
  export interface Seccion {
    tituloSeccion: string
    platos: Plato[]
  }
  
  export interface Plato {
    nombre: string
    imagen: string
    precio: number
    descripcion?: string
  }