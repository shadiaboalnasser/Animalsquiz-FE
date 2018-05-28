export interface IAnswer {
    id: number;
    name: string;
  }

export interface IQuestion {
    id: number;
    question: string;
    idAfterNo?: number;
    idAfterYes?: number;
    typeAfterYes?: string;
    typeAfterNo?: string;
}
