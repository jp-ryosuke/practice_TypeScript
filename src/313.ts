//オブジェクトリテラル
//プロパティ名の種々の指定方法

//オブジェクトリテラルのプロパティに使えるのは識別子だけでなく文字列リテラルも使用可能

const obj2 = {
    "foo": 123,
    "foo bar": -500,
    '↑↓↑↓': ""
};

console.log(obj2.foo); //123
console.log(obj2["foo bar"]); //-500

//このようにプロパティ名として文字列リテラルを用いることには1つ大きな利点がある
//それは識別子としては使えないような文字列でもプロパティ名に用いることができること
//例えば "foo bar" は foo bar として使えない
//'↑↓↑↓' も ↑↓↑↓ とすると使えない
//識別子ではないプロパティ名に対して obj.foo のようにアクセスできず obj[foo] のように扱う

//数値リテラル

const obj3 = {
    1: "one",
    2.05: "two point o five",
};

console.log(obj3["1"]) //one
console.log(obj3["2.05"]) //two point o five

//たとえプロパティ名に数値リテラルを書いたとしてもオブジェクトのプロパティ名が文字列であることは変わらない
//あくまでオブジェクトリテラルの書き方として数値リテラルの形で書くことが許容されているだけ

//プロパティ名を動的に決めるための構文 計算されたプロパティ名
//変数名に入っている文字列をプロパティ名にするということが可能になる

const propName = "foo";
const obj4 = {
    [propName]: 123
};
console.log(obj4.foo); //123