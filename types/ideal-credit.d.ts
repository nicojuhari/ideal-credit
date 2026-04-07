declare module "ideal-credit" {
  export interface GraficRow {
    data_rata: string;
    credit_rata: number;
    dobinda_rata: number;
  }

  export function createGrafic(params: {
    sum: number;
    period: number;
    interest: number;
  }): GraficRow[];

  export function calcDAE(grafic: GraficRow[], sum: number): number;
}
