//代入演算子

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください:', (name) => {
    if(name === ''){
        name = '名無し';
    }
    console.log(`こんにちは ${name}さん`);
    rl.close();
});

//文字列しか代入できない
//248.ts:20:1 - error TS2322: Type 'number' is not assignable to type 'string'.
/*
let foo: string = '文字列';
foo = 123;
*/