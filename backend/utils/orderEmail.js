// utils/orderEmail.js

export const generateOrderEmail = ({ order, items, type = "user" }) => {
  const itemList = items
    .map((item) => `<li>${item.name} x ${item.quantity}</li>`)
    .join("");

  if (type === "admin") {
    return `
      <h2>New Order Placed</h2>
      <p>Order ID: ${order._id}</p>
      <p>Payment Method: ${order.paymentMethod}</p>
      <p>Total Amount: ₹${order.amount}</p>
      <p>Shipping Address: ${order.address}</p>
      <p>Items:</p>
      <ul>${itemList}</ul>
    `;
  } else {
    return `
      <h2>Order Confirmation</h2>
      <p>Hi, your order has been placed successfully!</p>
      <p>Order ID: ${order._id}</p>
      <p>Payment Method: ${order.paymentMethod}</p>
      <p>Total Amount: ₹${order.amount}</p>
      <p>Shipping Address: ${order.address}</p>
      <p>Items:</p>
      <ul>${itemList}</ul>
      <p>Thank you for shopping with PriyaLooms!</p>
    `;
  }
};
