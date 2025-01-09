import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  servicios = [
    {
      icono: 'fas fa-bolt',
      titulo: 'Estadía Express',
      descripcion:
        'Deja a tu peludo en buenas manos por unas horas con nuestra Estadía Express, donde recibirá atención personalizada y diversión en áreas de recreo.',
      incluye: [
        'Supervisión y cuidado durante el tiempo de estancia.',
        'Acceso a áreas recreativas.',
        'Atención personalizada para su comodidad.',
      ],
      idealPara:
        'Propietarios que necesitan cuidado rápido y temporal para sus mascotas.',
      frecuencia: 'Horas específicas durante el día.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-home',
      titulo: 'Estadía Diurna',
      descripcion:
        'En nuestra Estadía Diurna, tu mascota descansará en un entorno seguro y cómodo, bajo la supervisión de nuestro equipo para tu tranquilidad.',
      incluye: [
        'Supervisión y cuidado durante el día (máximo de 8 horas).',
        'Paseos y tiempo de juego con otros perros.',
        'Área de descanso.',
      ],
      idealPara: 'Propietarios que trabajan fuera de casa durante el día.',
      frecuencia: 'Diario, semanal o mensual.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-dog',
      titulo: 'Estadía Completa',
      descripcion:
        'Este plan completo para que tu perro pase todo el día y la noche en un entorno seguro y cómodo, con atención y cuidado garantizados.',
      incluye: [
        'Supervisión 24/7.',
        'Comidas personalizadas (suministradas por los dueños o preparadas en la guardería).',
        'Paseos adicionales y actividades especiales como juegos y/o entrenamientos.',
        'Informes diarios de comportamiento.',
      ],
      idealPara: 'Propietarios que requieren cuidado prolongado o intensivo.',
      frecuencia: 'Diario o paquetes semanales.',
      botonTexto: 'Conocer más',
    },
    {
      icono: 'fas fa-solid fa-umbrella-beach',
      titulo: 'Plan Fin de Semana',
      descripcion:
        'Este plan permite a los dueños dejar a sus perros en la guardería durante el fin de semana completo.',
      incluye: [
        'Estancia desde el viernes por la tarde hasta el domingo por la noche.',
        'Alimentación, paseos, y actividades recreativas.',
      ],
      idealPara: 'Propietarios que planean viajes cortos de fin de semana.',
      frecuencia: 'Fines de semana.',
      botonTexto: 'Conocer más',
    },
  ];
}
