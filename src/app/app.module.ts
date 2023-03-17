import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Route, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';





const appRoutes:Route[]=[
  {
    path: '',
   loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'blog',
    loadChildren:()=> import('./pages/blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'blogpost',
    loadChildren: () => import('./pages/blog-post/blog-post.module').then(m => m.BlogPostModule),
  },
  {
    path:'aboutus',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsModule),
  },
  {
    path:'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
  },
  {
    path:'author',
    loadChildren: () => import('./pages/author/author.module').then( m => m.AuthorModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactModule),
  },
  {
    path:"policy",
    loadChildren: () => import('./pages/policy/policy.module').then(m => m.PolicyModule),
  },
  {
    path: "admin",
    loadChildren:() =>import('./admin/admin.module').then(m =>m.AdminModule),
  },
  {
    path: "login",
    loadChildren:() =>import('./login/login.module').then(m =>m.LoginModule),
  }
];


@NgModule({
  declarations: [
    AppComponent,






  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'top'
    }),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
