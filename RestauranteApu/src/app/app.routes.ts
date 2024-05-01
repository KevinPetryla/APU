import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    { 
        path: "contacto",
        title: "Contacto",
        component: ContactoComponent
    },
    {
        path: "reservas",
        title: "Reservas",
        component: ReservasComponent
    },
    {
        path:"iniciodesesion",
        title: "Inicio Sesion",
        component: IniciosesionComponent
    },
    {
        path: "registro",
        title: "Registro",
        component: RegistroComponent
    }
];
