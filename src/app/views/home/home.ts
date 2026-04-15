import { Component } from '@angular/core';
import { HeroListComponent } from "../../components/hero-list/hero-list";

@Component({
  selector: 'app-home',
  imports: [HeroListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  hello: string = 'Hello, welcome to the Hero Project School!';
}
