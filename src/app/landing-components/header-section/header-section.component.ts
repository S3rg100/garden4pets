import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-section',
  standalone: true,
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {
  activeSection: string = 'hero'; // Sección inicial activa

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.getBoundingClientRect().height;

      if (sectionTop >= 0 && sectionTop <= sectionHeight / 2) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    if (currentSection) {
      this.activeSection = currentSection;
      console.log(this.activeSection);
    }
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
