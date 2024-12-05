import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from "./landing-components/header-section/header-section.component";
import { HeroSectionComponent } from "./landing-components/hero-section/hero-section.component";
import { FooterSectionComponent } from "./landing-components/footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSectionComponent, HeroSectionComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'garden4pets';
}
