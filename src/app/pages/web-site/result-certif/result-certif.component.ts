import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-certif',
  templateUrl: './result-certif.component.html',
  styleUrls: ['./result-certif.component.css']
})
export class ResultCertifComponent {

  result = 'Félicitations ! Vous avez obtenu 85 % sur le quiz.'; // Exemple de résultat
  certificationForm: any; // Formulaire (si nécessaire)

  constructor(private router: Router) {}

  // Méthode pour naviguer vers le chatbot
  goToChatbot() {
    this.router.navigate(['/chatbot']); // Redirige vers la page de chatbot
  }
}

