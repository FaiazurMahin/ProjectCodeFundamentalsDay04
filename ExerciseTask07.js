//Task07: Write a program to calculate the factorial of a given number N.
//for
function fac(N){ 
    let mul =1;
    for(i=N; i>=1;i--){
       mul= mul*i;
    }
    console.log(mul);
}
fac(5)

//while
function fact(N){
    let mul=1;
    let i=N;
    while(i>=1){
        mul=mul*i;
        i--;
    }
    console.log(mul);
}
fact(4);

//do
function facto(N){
    let mul=1;
    let i=N;
    do{
        mul=mul*i;
        i--;
    }
    
    while(i>=1);

    console.log(mul);
}
facto(3)