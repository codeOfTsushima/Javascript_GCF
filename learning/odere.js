//=========================
// ORDER SYSTEM
//=========================
// user--> order --> Bill Calculate --> Payment --> Delivery
//1. Create Order
function createOrder(user, items) {
    if (!user) {
        console.log("Invalid User❌")
        return null;
    }
    if (!items || items.lenth === 0) {
        console.log("❓cart is empty");
        return null;
    }
    console.log("✅ odrder Created for", user);
    return {
        User: user,
        items: items,
        status: "created"
    };
}

//step 2: Calculate Bill
function calculateBill(order) {
    if (!order) {
        console.log("❌ No order Found");
        return null;
    }
    let total = 0;

    for (let item of order.items) {
        if (item.price <= 0) {
            console.log("🚫Invalid Price for, item.name");
            continue;
        }
        total += item.price;
    }

    //Business Rule: Discount
    if (total > 300) {
        console.log("🎉Discount Applied: RS 50");
        total -= 50;
    }
    order.total = total;
    console.log("💸 Total Bill: ", total);
    return order;
}

//Step 3 Make Paymet
function makePayment(order, callback) {
    if (!order) {
        console.log("💔 Payment Failed: No Order");
        return;
    }

    console.log("🙄 Payment Processing....");

    setTimeout(() => {
        let success = Math.random() > 0.3;

        if (success) {
            order.status = "paid";
            console.log("Payment Successful🤩");
            callback(order);
        }
    }, 1000)
}

//step 4. Deliver order
function deliverOrder(order) {
    if (order.status === "paid") {
        console.log("🚚 Order Deliver to", order.User);
    } else {
        console.log("🥴 Delivery Cancelled. 💸Pyamnet Not done");
    }
}



const items = [
    { name: "Pizza", price: 199 },
    { name: "Burger", price: 99 },
    { name: "Fried", price: 49 },
    { name: "Momes", price: 50 }
];

let order = createOrder("Parthip", items);

if (order) {
    order = calculateBill(order);

    makePayment(order, function (updateOrder) { deliverOrder(updateOrder) });
}