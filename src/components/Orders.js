import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import { useHistory } from "react-router-dom";

function Orders() {
  // eslint-disable-next-line no-unused-vars
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    user
      ? db
          .collection("users")
          .doc(user?.uid)
          .collection("orders")
          .orderBy("created", "desc")
          .onSnapshot((snapshot) =>
            setOrders(
              snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
            )
          )
      : setOrders([]);
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
