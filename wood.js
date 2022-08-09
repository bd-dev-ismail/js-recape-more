/*
1. chair -- 3cft
2. table -- 10 cft
3. bed -- 50 cft
*/

function woodCalculator(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chair * perChairWood;
    const tableWood = table * perTableWood;
    const bedwood = bed * perBedWood;
    
    const totalWood = chairWood + tableWood + bedwood;

    return totalWood;
}
const totalWood = woodCalculator(1, 1, 0);
console.log( 'Total Wood requerid is: ',totalWood);