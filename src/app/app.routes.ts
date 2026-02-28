import { Routes } from '@angular/router';
import { Products } from './Components/products/products';
import { Home } from './Components/home/home';
import { Brands } from './Components/brands/brands';
import { Product } from './Components/product/product';
import { Categories } from './Components/categories/categories';
import { Cart } from './Components/cart/cart';
import { Register } from './Components/register/register';
import { Login } from './Components/login/login';
import { Wishlist } from './Components/wishlist/wishlist';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
        title: "Home"
    }
    ,
    {
        path: "home",
        component: Home,
        title: "Home"

    }
    ,
    {
        path: "products",
        component: Products,
        title: "Products"
    },
    {
        path: "brands",
        component: Brands
    },
    {
        path :"categories" ,
        component : Categories
    }
    ,
    {
        path:"products/:productId" ,
        component : Product ,
        title : "Product Details"
    } ,
    {
        path : "cart" ,
        component : Cart ,
        canActivate : [authGuard] ,
        title : "My Cart"
    } ,
    {
        path : "signup" ,
        component : Register ,
        title : "Register"
    } ,
    {
        path : "signin" ,
        component : Login ,
        title : "Login"
    } ,
    {
        path :"wishlist" ,
        component : Wishlist ,
        canActivate : [authGuard] ,
        title : "Wishlist"
    }
];
