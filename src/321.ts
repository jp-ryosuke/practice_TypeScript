//オブジェクトの型
//オブジェクト型を用いることで TS で扱うオブジェクトの型を宣言、制限できる

//オブジェクト型の記法
//これまでに変数に型注釈を書いていなかったが、型推論により変数の型は常に存在している
//変数 obj に入るのはオブジェクトなので TS がオブジェクト型を推論してくれたことが期待できる

const obj321 ={
    foo: 123,
    bar: "Hello world",
};

//foo: Number
//bar: String
//として型推論されている

