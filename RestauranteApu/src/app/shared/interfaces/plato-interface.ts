export interface PlatoInterface {
    numSeccion: number
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
