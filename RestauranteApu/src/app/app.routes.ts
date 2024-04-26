import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/inicio",
        pathMatch: "full",
    },
    {
        path: "inicio",
        component: InicioComponent
    },
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
    },
    {
        path: "**",
        title: "404 Page not found",
        component: PageNotFoundComponentComponent
    }
];
