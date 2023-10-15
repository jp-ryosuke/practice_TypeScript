//算術演算子の例
//number の場合は小数もサポートされるが BigInt は整数のみが扱われるため、除算で割り切れない場合などは切り捨てられる

const addResult = 1024 + 314 + 500;
console.log(addResult); //1838

const discounted = addResult * 0.7;
console.log(discounted); //1286.6

const sqrt2 = 2 ** 0.5;
console.log(sqrt2); //1.4142135623730951
console.log(sqrt2 - 1) //0.4142135623730951

console.log(18 / 12); //1.5
console.log(18n / 12n); //1n
console.log(18 % 12); //6
console.log(18n % 12n); //6n

/*このように算術演算子には返り値がある
返り値はオペランドが number 型なら返り値も number となりオペランドが BigInt なら返り値も BigInt となる
通常の数値と BigInt のどちらに対しても使用することができるが 3 + 4n のように混ぜて使うことはできない
コンパイルエラーとなる*/

const res1 = 5 - 1.86; //number
console.log(res1);
const res2 = 2n ** 5n; //BigInt
console.log(res2);