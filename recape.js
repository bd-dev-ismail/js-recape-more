const country = 'Bangladesh';
const student = {
    name: 'Md Ismail Hossen',
    class: 12,
    id: 220
}
const name = ['jim', 'keli', 'jukar'];
console.log(Array.isArray(name));
const friends = [23, 43, 54, 65];
console.log(friends.includes(23));

const newfd = [45, 66, 77, 33];
const allfd = newfd.concat(friends);
console.log(allfd);