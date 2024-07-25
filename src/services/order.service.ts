export class OrderService {
  private static OrderInfo = new OrderService();
  card: number[] = [];

  constructor() { }

  addToCard(id: number) {
    this.card.push(id);
  }

  get totalCard(): number {
    return this.card.length;
  }

  get orderService() {
    return OrderService.OrderInfo;
  }
}