//Task05 : Write a program to print the first N Fibonacci numbers
//for
function fibo(){
    let a=0;
    let b=1;
    let N=10;
    for(let i=0;i<N;i++){
        console.log(a);
        let next = a+b;
        a=b;
        b=next;
    }
}
fibo();

//while

function fibon(){
   let a=0;
   let b=1;
   let N=10;
   let i=0;
   while(i<N){
     console.log(a);
     i++;
     let next=a+b;
     a=b;
     b=next;
   }
}
fibon();

//do
function fibona(){
    let a=0;
    let b=1;
    let N=10;
    let i=0;
    do{
        console.log(a);
        i++;
        next=a+b;
        a=b;
        b=next;
    }
    while(i<N);
}
fibona()
