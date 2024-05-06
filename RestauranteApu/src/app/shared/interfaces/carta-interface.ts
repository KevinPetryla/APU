export interface CartaInterface {
    titulo: string
    secciones: Seccion[]
  }
  
  export interface Seccion {
    numSeccion: string
    tituloSeccion: string
    platos: Plato[]
  }
  
  export interface Plato {
    idPlato: string
    nombre: string
    imagen: string
    precio: number
    descripcion?: string
  }