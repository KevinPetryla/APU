export interface SeccionInterface {
    numSeccion: number
    tituloSeccion: string
    platos: Plato[]
  }
  
  export interface Plato {
    idPlato: number
    nombre: string
    imagen: string
    precio: number
    descripcion?: string
  }
