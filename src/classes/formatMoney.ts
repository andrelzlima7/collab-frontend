export class FormatMoney {
  public reais (valor: number): string {
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
