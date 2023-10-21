//比較演算子と等価演算子

/*これらはその名の通り2つの値を比較するという計算を行う演算子です
比較演算子は値の大小の比較を行う演算子で < > <= >= の4つです
等価演算子は値の一致判定を行う演算子で == != === !== の４つです
比較演算子および等価演算子の返り値は必ず真偽値 boolean 型です
比較の結果が正しいなら true 正しくないなら返り値は false となります

x < y という式は x が y よりも小さければ true になり そうれなければ false になります
x <= y は x が y 以下ならば true に、そうでなければ false になります
> と >= についても向きが逆になっただけで同様です*/

const left1 = -5, right1 = 0;
console.log(left1 < right1); //true

const left2 = 100n, right2 = 50n;
console.log(left2 >= right2); //true

const left3 = -10, right3 = 0;
console.log(left3 > right3); //false

const left4 = 12n, right4 = 8n;
console.log(left4 <= right4); //false

/*ほとんどの場合、大小比較の演算子は数値の大小比較に使われます
ただし、実は文字列に対しても大小比較を行うことができます
その場合、各文字のコードユニットを要素とする辞書順で文字列が比較されます
この目的で比較演算子を用いるコードは非常に珍しく、出会うのには数年に1回かもしれませんが、頭の片隅にとどめておいて損はないでしょう*/

//大小比較の例
// true が表示される a は o よりもコードポイントが小さいため
console.log("apple" < "orange");

//一致判定の例
const left: number = 1;
const right: number = 2;

console.log(left === right); //false
console.log(left !== right); //true

/*一致判定には == と === の2種類がある
!= と !== はそれぞれの否定形
=== は等しければ true 等しくなければ false
!== はその逆*/

//=== の複雑な例

import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('パスワードを入力してください: ', (password) =>{
    if(password === 'hogehoge'){
        console.log('ようこそ');
    }else{
        console.log('誰？');
    }
    rl.close();
});

// == と != は基本的には使うべきではない
// == と === の違い

const str: any = "3";

console.log(str == 3); //true
console.log(str === 3); //false

/*ただし == を使用して良い場面が1つだけある
それは x == null の比較を行う場合
x == null の比較は x が null または undefined であるという意味の比較になる
両者を一緒に扱いたい場合は、この記法を用いる
逆に null と undefined を厳密に区分したい場合は === を使う*/