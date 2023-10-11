const bignum : bigint = (123n + 456n) * 2n;
console.log(bignum);//1158n

const result = 5n / 2n;
console.log(result);//2n

/*
BigIntは任意制度の整数を表すプリミティブ
BigIntにはnumberのような精度の制限がない
一方で計算速度はBigIntよりnumberの方が高速なためnumberの精度で十分な場合はnumberを使うべき
BigInを扱うためには123nのように整数のあとにnを書くリテラルとなる
*/

/*
const wrong = 100n * 50;
234.ts:7:15 - error TS2365: Operator '*' cannot be applied to types 'bigint' and 'number'.
7 const wrong = 100n * 50;
*/