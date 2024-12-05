import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from "./landing-components/header-section/header-section.component";
import { HeroSectionComponent } from "./landing-components/hero-section/hero-section.component";
import { FooterSectionComponent } from "./landing-components/footer-section/footer-section.component";
import { AboutUsSectionComponent } from "./landing-components/about-us-section/about-us-section.component";
import { ServicesSectionComponent } from "./landing-components/services-section/services-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSectionComponent, HeroSectionComponent, FooterSectionComponent, AboutUsSectionComponent, ServicesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'garden4pets';
}
