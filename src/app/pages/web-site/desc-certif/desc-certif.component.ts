import { Component } from '@angular/core';

@Component({
  selector: 'app-desc-certif',
  templateUrl: './desc-certif.component.html',
  styleUrl: './desc-certif.component.css'
})
export class DescCertifComponent {
  certificationDetails = {
    name: 'Certification PMI-PMP',
    description: 'Détails sur le processus de certification...',
    prerequisites: 'Expérience en gestion de projet...',
    duration: '40 heures de préparation estimée',
  };


}
