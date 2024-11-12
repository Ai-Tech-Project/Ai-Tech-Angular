import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from "../../../models/Question";
import { QuestionService } from "../../../services/question/question.service";
import { Attempt } from '../../../models/Attempt'; // Import the Attempt interface

@Component({
  selector: 'app-certification-form',
  templateUrl: './certification-form.component.html',
  styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent implements OnInit {
  listQuestions: Question[] = [];
  attempts: Attempt[] = [];
  result: string = '';
  certificationForm!: FormGroup;
  currentQuestionIndex: number = 0;
  answeredQuestions: number = 0;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private questionService: QuestionService) {}

  ngOnInit(): void {
    this.certificationForm = this.fb.group({});
    this.findQuestions();
  }

  findQuestions(): void {
    this.questionService.getQuestions().subscribe(
      (questions: Question[]) => {
        this.listQuestions = questions;
        this.listQuestions.forEach(question => {
          this.certificationForm.addControl(
            question.id,
            new FormControl(null, Validators.required)
          );
        });
        console.log('Questions loaded:', this.listQuestions);
      },
      error => {
        console.error('Error loading questions:', error);
      }
    );
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.isSubmitted = false;
    // Reset the form control for the new question
    this.certificationForm.get(this.listQuestions[this.currentQuestionIndex]?.id)?.reset();
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      // Reset the form control for the previous question
      this.certificationForm.get(this.listQuestions[this.currentQuestionIndex]?.id)?.reset();
    }
  }

  submitAnswer(): void {
    const currentQuestion = this.listQuestions[this.currentQuestionIndex];
    const selectedOption = this.certificationForm.get(currentQuestion.id)?.value;

    if (!selectedOption) {
      alert('Veuillez sélectionner une réponse !');
      return;
    }

    // Save the attempt
    this.attempts.push({
      question: currentQuestion,
      chosenOption: selectedOption
    });

    // Check if the answer is correct and display feedback
    const correctOption = currentQuestion.options.find(option => option.isCorrect);
    if (selectedOption.isCorrect) {
      this.result = `
        <p class="text-success">Bravo, vous avez répondu correctement !</p>
        <p><strong>La bonne réponse: </strong>${currentQuestion.answer_text}</p>
      `;
    } else {
      this.result = `
        <p class="text-danger">Désolé, la bonne réponse était: ${correctOption?.optionText}</p>
        <p><strong>Description:</strong> ${currentQuestion.answer_text}</p>
      `;
    }
    this.answeredQuestions++;
    this.isSubmitted = true;
  }

  displayAttempts() {
    return this.attempts;
  }
}
