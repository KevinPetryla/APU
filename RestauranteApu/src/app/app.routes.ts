import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReservasComponent } from './pages/reservas/reservas.component';

export const routes: Routes = [
    { 
        path: "contacto",
        component: ContactoComponent
    },
    {
        path: "reservas",
        component: ReservasComponent
    }
];
