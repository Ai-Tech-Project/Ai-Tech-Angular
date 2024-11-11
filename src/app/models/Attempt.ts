import {Question} from "./Question";
import {Option} from "./Option";


export interface Attempt {
  question: Question;
  chosenOption: Option;
}
