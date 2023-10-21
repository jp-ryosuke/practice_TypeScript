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