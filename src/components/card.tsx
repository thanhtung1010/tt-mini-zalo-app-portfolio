import React from "react";
import { OrderService } from "../services/order.service";

const Card: React.FunctionComponent = (props) => {
  const orderService = new OrderService().orderService;
  const checkTotal = () => {
    console.log(orderService.totalCard)
  }
  return (
    <div onClick={() => checkTotal()}>{props.total}</div>
  );
}

export default Card;