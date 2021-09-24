import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppMainDirective } from './app-main.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsyncPipePipe } from './async-pipe.pipe';
import { HeaderDirectiveDirective } from './header-directive.directive';
import { EventCompComponent } from './event-comp/event-comp.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainDirective,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AsyncPipePipe,
    HeaderDirectiveDirective,
    EventCompComponent,
    UserProfileComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
modules  -->

components
services
directives
pipes

*/