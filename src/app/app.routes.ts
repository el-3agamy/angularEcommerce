import { Routes } from '@angular/router';








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
        loadComponent: () => import('./Components/home/home').then(m => m.Home),
        title: "Home" 

    }
    ,
    {
        path: "products",
        loadComponent: () => import('./Components/products/products').then(m => m.Products),
        title: "Products"
    },
    {
        path: "brands",
        loadComponent: () => import('./Components/brands/brands').then(m => m.Brands)
    },
    {
        path :"categories" ,
        loadComponent: () => import('./Components/categories/categories').then(m => m.Categories)
    }
    ,
    {
        path:"products/:productId" ,
        loadComponent: () => import('./Components/product/product').then(m => m.Product) ,
        title : "Product Details"
    } ,
    {
        path : "cart" ,
        loadComponent: () => import('./Components/cart/cart').then(m => m.Cart) ,
        canActivate : [authGuard] ,
        title : "My Cart"
    } ,
    {
        path : "signup" ,
        loadComponent: () => import('./Components/register/register').then(m => m.Register) ,
        title : "Register" ,
        
    } ,
    {
        path : "signin" ,
        loadComponent: () => import('./Components/login/login').then(m => m.Login) ,
        title : "Login"
    } ,
    {
        path :"wishlist" ,
        loadComponent: () => import('./Components/wishlist/wishlist').then(m => m.Wishlist) ,
        canActivate : [authGuard] ,
        title : "Wishlist"
    }
];
