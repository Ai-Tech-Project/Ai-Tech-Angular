import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/Question';
import { QuestionService } from '../../../services/question/question.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  questionForm: FormGroup;
  listQuestion: Question[] = [];

  constructor(private questionService: QuestionService, private formBuilder: FormBuilder) {
    this.questionForm = this.formBuilder.group({
      question_text: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getQuestions().subscribe(
      (questions) => {
        this.listQuestion = questions;
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }

  onSubmit() {
    if (this.questionForm.valid) {
      const newQuestion: Question = {
        id: '',  // Generate or handle ID in the backend
        question_text: this.questionForm.value.question_text,
        answer_text: '',
        created_at: new Date(),
        options: []

      };

      // Optionally send this question to the service to get an answer
      this.questionService.addQuestion(newQuestion).subscribe(
        (response) => {
          // Handle the response or push the question directly if API gives back data
          this.listQuestion.push(response);
          this.questionForm.reset();
        },
        (error) => {
          console.error('Error submitting question:', error);
        }
      );
    }
  }
}
