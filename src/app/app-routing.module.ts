import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './guard/auth.guard';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent},
  {path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'listing', component: ListingPageComponent, canActivate: [AuthGuard]},
  { path: 'Character/:id', component: CharacterDetailComponent, canActivate: [AuthGuard]},
  { path: 'favorites', component: FavoritePageComponent, canActivate: [AuthGuard]},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/login' },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService], 
})
export class AppRoutingModule { }
