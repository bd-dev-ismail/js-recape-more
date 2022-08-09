const friends = [22, 33, 44, 55, 66, 77];
    friends[3] = 23;
    friends.push(99, 100);
    friends.pop();
// console.log(friends);

const name = ['Nowrin', 'Amrin', 'Nowshin', 'Ratul', 'Ismail', 'Hossen'];
for(let i = 0; i < name.length; i++){
    const index = name[i];
    // console.log(i, index);
}
//Write a code to show the up of 80 all numbers
const roll = [20, 50, 90, 89, 80, 45, 88, 81, 79];
for(let i = 0; i < roll.length; i++){
    const index = roll[i];
    // console.log(index);
    if(index >= 80){
        console.log(index);
    }
}