export interface IAnswer {
    id: number;
    name: string;
  }

export interface IQuestion {
    id: number;
    question: string;
    nextYID?: number;
    nextNID?: number;
    nextYType?: number;
    nextNType?: number;
    parentID?: number;
}
