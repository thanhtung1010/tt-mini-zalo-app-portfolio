export class OrderService {
  public static OrderInfo = new OrderService();
  card: string[] = [];

  constructor() {}

  addToCard(id: string) {
    this.card.push(id);
  }

  get totalCard(): number {
    return this.card.length;
  }
}