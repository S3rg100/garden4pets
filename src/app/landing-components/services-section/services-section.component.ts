import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  servicios = [
    {
      icono: 'fas fa-bolt',
      titulo: 'Estadía Express',
      descripcion: 'Deja a tu peludo en buenas manos por unas horas con nuestra Estadía Express, donde recibirá atención personalizada y diversión en áreas de recreo.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-home',
      titulo: 'Estadía Diurna',
      descripcion: 'En nuestra Estadía Diurna, tu mascota descansará en un entorno seguro y cómodo, bajo la supervisión de nuestro equipo para tu tranquilidad.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-dog',
      titulo: 'Estadía Completa',
      descripcion: 'Este plan completo para que tu perro pase todo el día y la noche en un entorno seguro y cómodo, con atención y cuidado garantizados.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-solid fa-umbrella-beach',
      titulo: 'Plan Fin de Semana',
      descripcion: 'Este plan permite a los dueños dejar a sus perros en la guardería durante el fin de semana completo.',
      botonTexto: 'Conocer más',
    }
  ];
}
