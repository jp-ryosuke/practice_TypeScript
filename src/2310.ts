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

/*数値への変換を扱う際には NaN に注意しなければいけません
NaN は 数値型の特殊な値である、数値が必要な場面で数値が得られなかった場合に出現します
文字列から数値への変換において、数値として解釈できないような文字列が与えられた場合と言うのもその一つです
例えば今回のプログラムに foobar という文字列を入力した場合には Number(line) の結果が NaN になります
また、数値計算において NaN が絡む計算の結果は NaN になるので NaN + 1000 は NaN です
よって console.log で表示されるのは NaN となります
実際のプログラムでは NaN が得られた場合にどうするかということも考えなければいけないでしょう

数値を入力してください:foobar
NaN
*/

/*ちなみに、文字列以外の値も数値に変換できます
真偽値については true が 1 に false が 0 になります
また null は 0 に undefined は NaN になります
真偽値については覚えておくと意外と役に立ちますが null とか undefined をこれらの挙動に頼って数値に変換するのはわかりにくくなるためやめたほうがよいでしょう
*/

const num1 = Number(true);
console.log(num1);

const num2 = Number(false);
console.log(num2);

const num3 = Number(null);
console.log(num3);

const num4 = Number(undefined);
console.log(num4);