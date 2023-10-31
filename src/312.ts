//オブジェクトリテラル 基本的な構文

const obj1 = {
    foo: 555,
    bar: "文字列"
};

/*
const user = {
    name: input ? input : "名無し",
    age: 20,
};
*/

//オブジェクトリテラルにはよく使用される省略記法がある
//プロパティに入れた内容を予めて計算して変数に入れた場合
/*
const name = input ? input: "名無し";

const user = {
    name: input ? input : "名無し",
    age: 20,
};
*/


//このようにプロパティ名 : 変数名という形の場合で、しかもプロパティ名と変数名が同じである場合は次のように省略できる
/*
const name = input ? input : "名無し";
const user = {
    name,
    age: 20,
};
*/