//FizzBuzz

for (let i: number = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    }else if(i % 3 !== 0 && i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//全ての結果を1行に出力

let FizzBuzzResult = "";

for(let i = 1; i <= 100; i++){
    if(i > 1){
        FizzBuzzResult += " ";
    }

    if(i % 3 === 0 && i % 5 ===0){
        FizzBuzzResult += "FizzBuzz";
    }else if(i % 3 === 0){
        FizzBuzzResult += "Fizz";
    }else if (i % 5 === 0){
        FizzBuzzResult += "Buzz";
    }else{
        FizzBuzzResult += String(i);
    }
}
console.log(FizzBuzzResult);