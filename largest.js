function bestFriend(name){
    let lgName = [];
    for(let i = 0; i < name.length; i++){
        let index = i;
        let element = name[index];
        // console.log(element);
        if(element.length > lgName.length){
            lgName = element;
        }
    }
    return lgName;
    
}
const friends = ['sajid', 'majid', 'tushar', 'foysal', 'Md Ismail Hossen'];
const output = bestFriend(friends);
console.log(output);