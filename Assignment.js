
function feetToMile(feet){

    
    let mile = feet / 5280;
    let result = mile;
    return result;

}

const output = feetToMile(105)
 console.log(output);




function woodCalculator(chair,table,bed){
var chairCount = chair * 1;
var tableCount = table * 3;
var bedCount = bed * 5;
var totalWood = chairCount + tableCount + bedCount;
return totalWood;

}
let result = woodCalculator(1,2,4);
console.log(result);


function tinyFriend(names){
let smallest = names[0];

for(let i =0;i <names.length; i++){
let currentName = names[i];
if(currentName.length<smallest.length){
smallest = currentName;

}

}

return smallest;



}




const result = tinyFriend(['ajij','sabbas','rakib','ajijur','raj']);
  console.log(result);


