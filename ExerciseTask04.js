//Task04 : Write a program to reverse a given number.
//for
function rev(){
    let num = 12345;
    for(let i=0;i<=num.length;i++){
      let lastnum = num%10;
      console.log(lastnum);       
    }
}
rev();
