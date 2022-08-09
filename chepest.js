const phones = [
    {
        name: 'Samsung', camera: 12, storage: '32bg', price: 36999, color: 'silver'
    },
    {
        name: 'Samphoney', camera: 0, storage: '32bg', price: 20000, color: 'silver'
    },
    {
        name: 'Iphone', camera: 12, storage: '32bg', price: 50000, color: 'red'
    },
    {
        name: 'Xaomi', camera: 12, storage: '32bg', price: 30000, color: 'red'
    },
    {
        name: 'Nokia', camera: 10, storage: '32bg', price: 40000, color: 'red'
    },
    {
        name: 'Oppo', camera: 10, storage: '32bg', price: 45000, color: 'red'
    },
    {
        name: 'Htc', camera: 10, storage: '32bg', price: 38000, color: 'red'
    }
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);