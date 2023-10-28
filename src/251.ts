//if文の基本

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
rl.question('名前を入力してください:', (name) => {
    //ブロックなしのif文
    if(name === "") name = "名無し";
    console.log(`こんにちは ${name}さん`);
    rl.close();
});
*/

//ブロック
//elseを使う
rl.question('名前を入力してください:', (name) => {
    
    if(name !== ""){
        console.log("ちゃんと名前があってえらい！");
    }else{
        console.log("名前を入力してください！");
        name = "名無し";
    }

    console.log(`こんにちは ${name}さん`);
    rl.close();
});

//else if
const num: number = -5;

if(num < 0){
    console.log("num は負の数です");
}else if(num === 0){
    console.log("num は0です");
}else{
    console.log("num は正の数です");
}

//このような書き方でも構わない
if(num < 0){
    console.log("num は負の数です");
}else{
    if(num === 0){
    console.log("num は0です");
    }else{
    console.log("num は正の数です");
    }
}