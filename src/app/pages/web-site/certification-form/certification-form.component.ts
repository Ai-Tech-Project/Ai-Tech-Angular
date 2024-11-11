import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Question } from "../../../models/Question";
import { QuestionService } from "../../../services/question/question.service";
import { Option } from "../../../models/Option";
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
      this.result = `Bravo, vous avez répondu correctement !<br>${currentQuestion.answer_text}<br>`;
    } else {
      this.result = `Désolé, la bonne réponse était : ${correctOption?.optionText}<br>${currentQuestion.answer_text}<br>`;
    }

    this.isSubmitted = true;
    this.answeredQuestions++;
  }

  displayAttempts() {
    return this.attempts;
  }
}
