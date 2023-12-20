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