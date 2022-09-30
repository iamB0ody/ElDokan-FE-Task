export interface Product {
  id: number;
  name: string;
  type: number;
  category: string;
  isSub: boolean;
  refId?: number;
  password: string;
  dFeesP: number;
  dFeesC: number;
}
