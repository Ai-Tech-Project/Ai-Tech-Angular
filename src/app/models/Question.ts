import {Option} from "./Option";

export interface Question {
  id: string;
  question_text: string;
  answer_text:string;
  created_at:Date;
  options: Option[];
}
