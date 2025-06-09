//Write a program to find the sum of the first N natural numbers

//for

function natnum(){
    let sum=0;
    for(let j=1; j<=5;j++){
        sum=sum+j;
    }
    console.log(sum);
}
natnum();

//while

function natnumb(){
    let j=1;   
    let sum=0;
    while(j<=5){
        sum=sum+j;
        j++;       
    }
    console.log(sum);
}
natnumb();

//do

let k=1;
let sum=0;
function natnumbe(){
do{
    sum=sum+k;
    
    k++;
}
while(k<=5);
console.log(sum);
}
natnumbe();


