import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    { 
        path: "contacto",
        component: ContactoComponent
    },
    {
        path: "reservas",
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
