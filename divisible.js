// Show outpur from: 1- 50 Note: if the number is diviable by 3 than instead of the number show 'foo' & the number divisable by 5 show 'bar' & the divisable by 3, 5 both show 'foobar'

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
    
}