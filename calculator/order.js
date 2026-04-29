const orders = [
    {id: 1, amount: 250, status:'delivered'},
    {id: 2, amount: 530, status:'pending'},
    {id: 3, amount: 170, status:'delivered'},
    {id: 4, amount: 100, status:'pending'},
    {id: 5, amount: 900, status:'delivered'},

];
const delivered = orders.filter(o => o.status === 'delivered');
console.log("\n Orders Delivered and payment succesful: \n",delivered);

const pending = orders.filter(p => p.status === 'pending');
console.log("\n Order and payment pending: \n",pending);

const discounted = delivered.map(o =>o.amount *0.9);
console.log("Discounted deliveries: \n",discounted)

const totalRev = discounted.reduce((acc, amt) => acc+amt,0);

console.log("Total Revenue: \n",{totalRev});


let 