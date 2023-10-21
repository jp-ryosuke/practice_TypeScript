//真偽値の演算
//論理演算子

/* && || はそれぞれ日本語で言うと論理演算子と論理和演算子
&& と || は二項演算子*/

const t = true, f = false;

console.log(t && t); //true
console.log(t && f); //false
console.log(f && f); //false

console.log(t || t); //true
console.log(t || f); //true
console.log(f || f); //false

import {createInterface} from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {

    const num = Number(line);
    if(0 <= num && num < 100){
        console.log(`${num} は0以上100未満です`);
    }else{
        console.log(`${num} は0以上100未満ではありません`);
    }

    if(!Number.isNaN(num)){
        console.log(num, "は NaN ではありません");
    }

    rl.close();
});