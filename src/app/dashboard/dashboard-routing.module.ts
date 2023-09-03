
import { NgModule } from "@angular/core"
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { UserDetailComponent } from "./pages/users/pages/user-detail/user-detail.component";
import { AlumnsComponent } from "./pages/alumns/alumns.component";
import { RouterModule, CanActivateFn } from '@angular/router';
import { FoldersComponent } from "./pages/folders/folders.component";
import { adminGuard } from "../core/guards/admin.guard";



@NgModule  ({
imports:[
    RouterModule.forChild([
    {
    path: 'home',
    component: HomeComponent,

    },
    {
    path: 'users',
    canActivate: [adminGuard],
    loadChildren:()=> import ('./pages/users/users.module').then(m => m.UsersModule),
    },

    {
    path: 'alumns',
    loadChildren: () => import ('./pages/alumns/alumns.module').then ((m) => m.AlumnsModule),
    },


    {
    path:'folders',
    loadChildren:() => import ('./pages/folders/folders.module').then((m) => m.FoldersModule),
    },
    {
    path: '**',
    redirectTo: 'home',
    },

    ]),
],

exports: [RouterModule]

})

export class DashboardRoutingModule{}


