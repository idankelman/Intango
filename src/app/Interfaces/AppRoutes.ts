import { Routes } from "@angular/router"
import { HomeComponent } from "../Pages/home/home.component"
import { FavoritesComponent } from "../Pages/favorites/favorites.component"
import { AdminComponent } from "../Pages/admin/admin.component"
import { SquareComponent } from "../Components/square/square.component"
import { FormNewComponent } from "../Components/form-new/form-new.component"
import { ReactiveFormComponent } from "../Components/reactive-form/reactive-form.component"

export const AppRoutes:Routes= [
    {path:"Home" , component: HomeComponent},
    {path:"Favorites" , component: FavoritesComponent},
    {path:"Square/:id" , component: ReactiveFormComponent},
    {path:"Admin" , component: AdminComponent},
    {path:"newSquare" , component: FormNewComponent},
    {path:"**", redirectTo:"/Home" , pathMatch:"full"}
]
