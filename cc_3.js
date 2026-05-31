const customers = [
  {
    name: "Alice Johnson",
    email: "alice@email.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Brian Smith",
    email: "brian@email.com",
    purchases: ["Keyboard"]
  },
  {
    name: "Cathy Brown",
    email: "cathy@email.com",
    purchases: ["Monitor", "Headphones"]
  }
];

customers.push({
  name: "David Wilson",
  email: "david@email.com",
  purchases: ["Webcam"]
});

customers.shift();

customers[0].email = "updatedbrian@email.com";

customers[1].purchases.push("USB Cable");

customers.forEach(customer => {
  console.log(
    `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
  );
});
customers[2].purchases.push("Mouse Pad");
