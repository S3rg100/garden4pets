import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../landing-components/header-section/header-section.component";
import { HeroSectionComponent } from "../landing-components/hero-section/hero-section.component";
import { AboutUsSectionComponent } from "../landing-components/about-us-section/about-us-section.component";
import { ServicesSectionComponent } from "../landing-components/services-section/services-section.component";
import { LocationSectionComponent } from "../landing-components/location-section/location-section.component";
import { FooterSectionComponent } from "../landing-components/footer-section/footer-section.component";
import { RatesSectionComponent } from "../landing-components/rates-section/rates-section.component";
import { ContactSectionComponent } from "../landing-components/contact-section/contact-section.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderSectionComponent, HeroSectionComponent, AboutUsSectionComponent, ServicesSectionComponent, LocationSectionComponent, FooterSectionComponent, RatesSectionComponent, ContactSectionComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
