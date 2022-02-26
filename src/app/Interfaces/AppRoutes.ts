import { Routes } from "@angular/router"
import { HomeComponent } from "../Pages/home/home.component"
import { SquareComponent } from "../Components/square/square.component"

export const AppRoutes:Routes= [
    {path:"Home" , component: HomeComponent},
    {path:"Favorites" , component: SquareComponent}
]
