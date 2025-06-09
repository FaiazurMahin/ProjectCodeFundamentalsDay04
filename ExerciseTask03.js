//Task03 : Write a program that prints all even numbers from 1 to 20, but skip numbers divisible by 4 using continue
//for
function ev(){
    for(let i=1; i<=20;i++){ 
        if (i%2===0){
            if(i%4===0){
            continue;
        }
            console.log(i);
        }       
    }
}
ev();

//while
function eve(){
    let j=1;
    while(j<=20){
        if(j%2===0){
            if(j%4===0){
                j++;
                continue;
            }
            console.log(j);
        }
        j++; //if not even number, it will get inc via this
    }
}
eve();

//do
function even(){
    let k=1;
    do{
        if(k%2===0){
            if(k%4===0){
                k++;
                continue;
            }
            console.log(k);  
        }
        k++;
    }
    while(k<=20);
}
even();
