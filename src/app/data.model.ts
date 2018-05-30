export interface IAnswer {
    id: number;
    answer: string;
  }

export interface IQuestion {
    id: number;
    question: string;
    idAfterNo?: number;
    idAfterYes?: number;
    typeAfterYes?: string;
    typeAfterNo?: string;
}
