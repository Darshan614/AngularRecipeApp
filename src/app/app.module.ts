import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './container/chat/chat.component';
import { LiveChatComponent } from './container/live-chat/live-chat.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const appRoutes: Routes = [
  { path: '', component: ContainerComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [{ path: ':id', component: ProjectDetailsComponent }],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ContainerComponent,
    ChatComponent,
    LiveChatComponent,
    ProjectDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
