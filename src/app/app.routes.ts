import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ConsultAct } from './consult-act/consult-act';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "index.html",
        component: Home
    },

    {
        path: "about",
        component: About
    },
    {
        path: "about2",
        component: About
    },
    {
        path: "consultAct",
        component: ConsultAct
    }
    ,
    {
        path: "consultAct/:idAct",
        component: ConsultAct
    },
    {
        path: "consultAct/:idAct/:idSec",
        component: ConsultAct
    }


];
