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

/*
その他の変換もざっと眺めてみましょう
数値への変換は Number 関数を使いましたが文字列への変換には String 関数を
真偽値への変換は Boolean 関数をつかいます
また BigInt への変換には BigInt 関数を使います
BigInt への変換も次のように、数値文字列真偽値などから可能です
改めての注意になりますが number と BigInt は別物なので注意しましょう
*/

const bigint1 = BigInt("1234");
console.log(bigint1); //1234n

const bigint2 = BigInt("500");
console.log(bigint2); //500n

const bigint3 = BigInt(true);
console.log(bigint3); //1n

/*
ただし BigInt には NaN に相当する値がないため注意が必要です
BigInt("foobar") とかのおうに数値を表しておらず BigInt への変換が不可能の値が渡された場合の挙動はランタイムエラーとなる
小数を渡した場合にもあはり乱打医務エラーとなるので注意が必要
いわゆる例外となるので try-catch で例外処理しないと強制終了してしまう
*/

/*
const bigint = BigInt("fooooo");
console.log("bigint is", bigint);
*/

/*
const bigint = BigInt("fooooo");
SyntaxError: Cannot convert fooooo to a BigInt

コンパイルは成功するがランタイムエラーが発生した
*/

//次は String の場合

//数値から文字列へ
const str1 = String(1234.5);
console.log(str1); //"1234.5"

//真偽値から文字列へ
const str2 = String(true);
console.log(str2); //true

// null や undefined も文字列に変換可能
const str3 = String(null);
const str4 = String(undefined);
console.log(str3, str4); //"null undefined"

/*最後に、真偽値への変換については少し興味深い仕様となっています
真偽値は true と false の2種類しかありませんから、どんな値も真偽値に変換するとそのどちらかになります
その規則は以下のようになっています
ほとんどの値は true になりますが一部 false となる値があります
具体的には 0 0n Nan "" null undefined*/

//数値             0 と NaN が false になり、他は true になる
//BigInt           0n が false となり、他は true となる
//文字列           空文字列 "" だけが false となり、他は true になる
//null undefined  false
//オブジェクト     すべて true になる

console.log(Boolean(123)); //true
console.log(Boolean(0));   //false
console.log(Boolean(1n));  //true
console.log(Boolean(0n));  //false
console.log(Boolean(""));  //false
console.log(Boolean("foobar"));  //true
console.log(Boolean(null));  //false
console.log(Boolean(undefined));  //false