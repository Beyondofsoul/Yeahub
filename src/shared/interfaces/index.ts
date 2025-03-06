export interface IQuestions {
  id: number;
  title: string;
  rate: number;
  complexity: number;
  shortAnswer: string;
  longAnswer: string;
}
export interface paramsType {
  page: number;
  specialization: number | null;
  skills: number | null;
  rate: number[];
  complexity: number[];
}
