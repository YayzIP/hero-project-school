import { Component } from '@angular/core';
import { HeroListComponent } from "../../components/hero-list/hero-list";
import { HeroForm } from "../../components/hero-form/hero-form";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroListComponent, HeroForm],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  hello: string = 'Hello, welcome to the Hero Project School!';
}
