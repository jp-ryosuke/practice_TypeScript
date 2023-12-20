//オブジェクトはいつ同じなのか

const foo1 = {num: 1234};
const bar1 = foo1;
console.log(foo1.num); //1234

bar1.num = 0;
console.log(foo1.num); //0

//オブジェクトはいつ同じなのか？
///明示的にコピーしなければ同じである

const foo2 = {num: 1234};
const bar2 = {...foo2};
console.log(bar2.num); //1234

bar2.num = 0;
console.log(foo2.num);

//こうした場合、コピーして得られた新しいオブジェクトになる
//つまり別々のオブジェクトなので書き換えても影響を受けない

//同じ中身のオブジェクトを作るからと言って必ずしもスプレッド構文を使う必要はない
//愚直に書くことも可能
//const foo3 = {num: 1234};
//const bar3 = {num: 1234};

//foo と bar に入っているオブジェクトは同じもの
const foo3 = {obj: {num: 1234}};
const bar3 = {...foo3};
bar3.obj.num = 0;
console.log(foo3.obj.num); //0

//ネスト↓オブジェクトも使いまわされないようにしたい場合の標準的な方法は今のところない
//スプレッド記法をネストしたオブジェクトに対しても使用するのも1つの方法だが記述が多くなってしまう

const foo4 = {num: 1234};
const bar4 = foo4;
const baz4 = {num: 1234};

console.log(foo4 === bar4); //true
console.log(foo4 === baz4); //false

//中身が全く同じだったとしても別のオブジェクトなので === で比較すると false になる
//オブジェクト自体は同じかどうかではなく中身が同じかどうかを比較したい場合はあるが、今のところ標準的な方法はない