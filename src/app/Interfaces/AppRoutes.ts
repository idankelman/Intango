import { Routes } from "@angular/router"
import { HomeComponent } from "../Pages/home/home.component"
import { FavoritesComponent } from "../Pages/favorites/favorites.component"
import { AdminComponent } from "../Pages/admin/admin.component"

export const AppRoutes:Routes= [
    {path:"Home" , component: HomeComponent},
    {path:"Favorites" , component: FavoritesComponent},
    {path:"Admin" , component: AdminComponent},
    // {path:"*", redirectTo:"/Home" , pathMatch:"full"},
    {path:"**", redirectTo:"/Home" , pathMatch:"full"}
]
