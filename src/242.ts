//単項演算子

//-式では正負を反転させた値を計算する
const x = 123;
const minusx = -x; //minusx は number
console.log(minusx); //-123

/*-1のような負の数値をプログラムで書くときはこれは1という数値リテラルに-という単項演算子がついたものになっている
-1でひとつの数値リテラルかと思いきや、実はそうではない
一方+という単項演算子は特に何もしない、与えられた数値をそのまま返すだけ
-との相対性のために用意されていうrと思われるが、何もしてくれないため計算のために使うことはない*/

/*一点だけ使い道があり
単項の+と-は数値以外の値もオペランドとして受け取ることができる
その場合それを数値に変換してから計算する
+の場合は数値に変換後の計算がないので実質的に数値に変換するだけの演算子となる
次の例ではstrはString型の変数だが+単項演算子を使って+strとすることで数値123に変換している
+str * 100 と言う式で 12300 という結果を得ることができる
数値に変換する方法としては Number(str) という方法もあるが +str の方が短く書くことができるためこちらを好む人もいる
Number の方がわかりやすくはある*/

const str: String = '123';
console.log(+str * 100);//12300

/*++ と -- の単項演算子はインクリメントとデクリメント
変数の中身が変動するため let で宣言された変数にしか使用できない*/

let foo = 10;
foo ++;
console.log(foo); //11
--foo;
console.log(foo); //10

/*上の例では演算子は敷く分で使われ、返り値が無視されている
このようにインクリメントデクリメント演算子は副作用のために使われることが多い演算子
副作用とは、返り値を返す以外に発生する影響のこと
インクリメントデクリメント演算子の場合、使用された時点で変数の値が書き換わるという副作用がある
しかし、これらの演算子も式である以上返り値が存在する
具体的には ++ や -- を後ろに着けた場合は変動前に変数の中身が返ってくる
前に付けた場合は変動後の変数の中身が返ってくる*/

console.log(++foo); //変動前の値11
console.log(foo--); //変動後の値11

/*とはいえ、インクリメント・デクリメントの返り値をこのように使うことはプログラムの可読性を下げがち
foo++; のようい式文で使う機会の方が多い*/