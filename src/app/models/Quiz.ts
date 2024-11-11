import {Question} from "./Question";

export interface Quiz {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  questions: Question[];
  totalQuestions: number;
  timeLimit: number;
  category?: string;
  dateCreated: Date;
}
