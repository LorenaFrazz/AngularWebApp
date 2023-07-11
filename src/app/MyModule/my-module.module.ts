import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpService } from 'src/app/services/sign-up.service';
import { LoginService } from 'src/app/services/login.service';
import { ListingPageService } from 'src/app/services/listing-page.service';
import { CharacterDetailService } from 'src/app/services/character-detail.service';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SignUpService,
    LoginService,
    ListingPageService,
    CharacterDetailService,
    AuthService
  ]
})
export class MyModuleModule { }
