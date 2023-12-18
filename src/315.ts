//オブジェクトリテラル スプレッド構文

const obj5 = {
    bar: 456,
    baz: 789,
};

const obj6 = {
    foo: 123,
    ...obj5,
};

console.log(obj6); //{ foo: 123, bar: 456, baz: 789 }

//このように素プレ度d構文は既存のオブジェクトを拡張した別のオブジェクトを作りたい場合に有用
//スプレッド構文と通常のプrパティ宣言が同じプrパティを与える場合、後に書かれている方が採用される

//次の例では obj8 で ...obj7 よりあとに foo: -9999 が書かれているので
//obj8 の foo プロパティは obj7 由来の 123 ではなく -9999 になる

const obj7 = {
    foo: 123,
    bar: 456,
    baz: 789,
};

const obj8 = {
    ...obj7,
    foo: -9999,
};

console.log(obj8); //{ foo: -9999, bar: 456, baz: 789 }


//obj9 よりも前に foo:-9999 を億のはコンパイルエラーになる
//上書きされると決まっているのにそれより前に置くのは無意味なので

const obj9 = {
    foo: 123,
    bar: 456,
    baz: 789,
};

//'foo' is specified more than once, so this usage will be overwritten.
const obj10 = {
    //foo: -9999,
    ...obj9,
};

//スプレッド構文は1つのオブジェクトリテラルの中で複数回使うこともできる
const obj11 = {
    foo: 123,
    bar: 456,
};

const obj12 = {
    bar: -999,
    baz: -9999,
};

const obj13 = {
    ...obj11,
    ...obj12,
};

console.log(obj13); //{ foo: 123, bar: -999, baz: -9999 }

//スプレッド構文によって行われるのはプロパティのコピーであるという点に注意
//コピー元のオブジェクトのプロパティを変更してもコピー先のオブジェクトには影響しない
//詳細は 3.1.6