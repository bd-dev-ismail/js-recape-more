const shoppingCart = [

    {name: 'shoe', price: 1000},
    {name: 'Shirt', price: 2000},
    {name: 'pant', price: 3000},
    {name: 'belt', price: 6000},
];
function totalCost(products){
    let  sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('My Total Shopping Cost is: ', expense);