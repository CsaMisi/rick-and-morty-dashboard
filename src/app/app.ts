import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from "./profile/profile";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Genesys_Hw_Assignment');
}
