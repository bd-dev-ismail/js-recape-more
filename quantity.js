const shoppingCart = [

    {name: 'shoe', price: 1000, quantity: 2},
    {name: 'Shirt', price: 2000, quantity: 4},
    {name: 'pant', price: 3000, quantity: 5},
    {name: 'belt', price: 6000, quantity: 6}
];
function totalCost(products){
    let  sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        
        sum = sum + productTotal;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('My Total Shopping Cost is: ', expense);