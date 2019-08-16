
export type SortItem = 'ASC' | 'DESC' | false;

export interface ISort {
  [key: string]: SortItem
}