//プリミティブ同士の変換 明示的な変換を行う

/*前項のサンプルでは line が文字列型だったために line +1000 が数値計算ではなく文字列の連結として処理されていまった
これを数値計算とするにはどうすればよいか
line を文字列から数値に変換すればよい
Number 関数を使う*/

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    const num = Number(line);
    //1000を足して出力
    console.log(num + 1000);
    rl.close();
});