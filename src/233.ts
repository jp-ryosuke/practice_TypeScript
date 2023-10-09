const binary = 0b1010; //2進数リテラル
const octal = 0o755; //8進数リテラル
const hexadecimal = 0xff; //16進数リテラル

//10 495 255
console.log(binary, octal, hexadecimal);

//指数表記のリテラル
const big = 1e8;
const small = 4e-5;

//100000000 0.00004
console.log(big, small);

//数値リテラルは数字の間に_を挟むことが許可されている
const million = 1_000_000;

//1000000
console.log(million);