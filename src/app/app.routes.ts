import { Routes } from '@angular/router';
import { Products } from './Components/products/products';
import { Home } from './Components/home/home';
import { Brands } from './Components/brands/brands';
import { Product } from './Components/product/product';
import { Categories } from './Components/categories/categories';

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
    }
];
