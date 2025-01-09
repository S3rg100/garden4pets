import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [DialogModule, CommonModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {

  @Input() icono!: string;
  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() botonTexto!: string;
  @Input() incluye!: string[];
  @Input() idealPara!: string;
  @Input() frecuencia!: string;

  visible: boolean = false;

  showDialog() {
    console.log('Mostrando diálogo');
    this.visible = true;
  }
}
