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

//TypeScriptにおける数値はIEE754倍精度浮動小数点数である

//仮数部の精度が53ビットである
//9007199254740992 と表示される
//2^53+1は2進数で54桁必要な数なので54ビットないと表現できない
console.log(9007199254740993);

//計算誤差
//数値が有限制度の浮動小数点数を使っている以上、それに由来する計算誤差が発生する

//0.30000000000000004
console.log(0.1 + 0.2);



