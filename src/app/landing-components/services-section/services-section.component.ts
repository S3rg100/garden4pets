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
      titulo: 'Estadía Nocturna',
      descripcion: 'En nuestra Estadía Nocturna, tu mascota descansará en un entorno seguro y cómodo, bajo la supervisión de nuestro equipo para su tranquilidad y la tuya.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-dog',
      titulo: 'Estadía Completa',
      descripcion: 'Un paquete completo para que tu perro pase todo el día y la noche en un entorno seguro y cómodo, con atención y cuidado garantizados.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-shuttle-van',
      titulo: 'Guardería con Transporte',
      descripcion: '¿No puedes llevar a tu peludo? No te preocupes, este servicio incluye la recogida y entrega de tu perro directamente en tu domicilio.',
      botonTexto: 'Conocer más',
    }
  ];
}
