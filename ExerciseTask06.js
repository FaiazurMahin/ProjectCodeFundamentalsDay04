//Task06: Write a program to find and print the first number divisible by 7 from a given range (e.g., 10 to 50)

//for
function div(){
    for(i=10;i<=50;i++){
        if(i%7===0){
            break;
        }
        i++;
    }
    console.log(i);
}
div();

//while
function divi(){
    let i=10;
    while(i<=50){
        if(i%7===0){
            break;
        }
        i++;
    }
    console.log(i);
}
divi();

//do
function divis(){
    let i=10;
    do{
        if(i%7===0){
            console.log(i);
            break;
        } 
        i++
    }
    while(i<=50);
}
divis();