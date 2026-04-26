import { Component, signal } from '@angular/core';
import { Home } from "./home/home";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Genesys_Hw_Assignment');
}
