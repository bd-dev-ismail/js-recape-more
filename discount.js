/*
1.if ticket numbers is less than 100 per ticket price: 100;
2. if ticket numbers is More than 100, but lesse than 200, First 100 ticket will be  per ticket price: 100 but rest tikets will be 90 tk.
3,if you purchase more than 200 ticket 
fisrt 100--100tk
second 101-200 ---90tk
200+--------70tk
*/
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const nextTicketQuantity = ticketQuantity - 100;
        const nextTicketPrice = nextTicketQuantity * 90;
        const totalPrice = first100Price + nextTicketPrice;
        return totalPrice
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const nextTicketQuantity = ticketQuantity - 200;
        const nextTicketPrice = nextTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + nextTicketPrice;
        return totalPrice;
}
}
const price = ticketPrice(220);
console.log(price);