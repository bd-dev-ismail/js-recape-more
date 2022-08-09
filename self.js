const student =  ['sabbir', 'Tushar', 'Akib', 'Foysal', 'Ratul', 'sabbir', 'Akib', 'Foysal', 'Tushar', 'Ismail', 'Hossen', 'Sajid'];

//check dubble name: 
function removeDuplicate(names){
    const policeCheck = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(policeCheck.includes(name) === false){
            policeCheck.push(name);
        }
    }
    return policeCheck;
}
const uniqueName = removeDuplicate(student);
console.log(uniqueName);