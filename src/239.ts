/*プリミティブ型同士の変換
暗黙の変換を体験する
与えられた数値から文字列を作ったり、あるいはその逆をしたり
readline という文字列を用いた例*/

/*import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});*/

/*rl.question('文字列を入力してください:', (line) => {
    //文字列が入力されるとここが実行される
    console.log(`${line} が入力されました`)
    rl.close();
});*/


//rl.question('数値を入力してください:', (line) => {
    // line が文字列であるため期待した通り 1000 を加算した結果は出力されない
    /*//1000を足して出力
    console.log(line + 1000);
    rl.close();*/

    // ↓ の result は型推論で変数の型を自動的に判別している
//    const result = line + 1000;
//    console.log(result);
//    rl.close();
//});


/*+ では実際にある型と必要な型が違う場合に自動的に値の変換が行われる
今回は数値から文字列への変換が行われ "1000" という文字列になった
プログラムに明示的に変換しろと書いてあるわけでもないのに変換されることから 暗黙の変換と呼ばれる*/