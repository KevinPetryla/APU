import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { Component } from '@angular/core';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartaComponent } from './pages/carta/carta.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/inicio",
        pathMatch: "full",
    },
    {
        path: "inicio",
        title: "Inicio",
        component: InicioComponent
    },
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
        title: "Iniciar Sesion",
        component: IniciosesionComponent
    },
    {
        path: "registro",
        title: "Registro",
        component: RegistroComponent
    },
    {
        path: "aboutus",
        title: "Sobre nosotros",
        component: AboutusComponent
    },{
        path: "carta",
        title: "Carta",
        component: CartaComponent
    },
    { 
        path: "delivery",
        title: "delivery",
        component: DeliveryComponent
    },
    { 
        path: "cart",
        title: "cart",
        component: CartComponent
    },
    {
        path: "**",
        title: "404 Page not found",
        component: PageNotFoundComponentComponent
    },
];
