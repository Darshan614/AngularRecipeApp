import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ContainerComponent } from './container/container.component';
@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ContainerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
