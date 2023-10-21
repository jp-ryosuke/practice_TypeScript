//一般形と短絡評価

//!!式の実用例
const input1 = "123", input2 = "";

const input1isNotEmpty = !!input1;
console.log(input1isNotEmpty); //true

const input2isNotEmpty = !!input2;
console.log(input2isNotEmpty); //false

//ユーザが何も入力せずにEnterした場合は名無しと表示
import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください:', (name) =>{
    const displayName = name || "名無し";
    console.log(`こんにちは、${displayName}さん`);
    rl.close();
});

/* && と || のもう一つの顕著な特徴は短絡評価です
これらの演算子が左の値を返す場合、右の値は評価すらされない

const displayName = name || getDefaultName();

この場合 || の短絡評価機能により name が 偽 だった場合にのみ getDefaultName の評価が行われる
必要のない処理はなるべく行わない方が良いので論理演算子にはこのような短絡評価の機能が備わっている*/

/* ?? ES2020 で追加された最新鋭の演算子
 x ?? y という形で使う二項演算子
x が null または undefined の時のみ y を返し、それ以外の場合は x を返す*/

//環境変数 SECRET を取得、ただし存在しなければ "default" を用いる
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);

/*これは SECRET という環境変数を読み込んで表示しますが与えられなかった場合は default を用います
環境変数を渡すためにはコンパイルして dist/index.js を得てから端末から次のようなコマンドで実行します

SECRET = foo node dist/index.js

このように実行すると環境変数 SECRET に foo が入るためsecretはfooですと返す
一方、普段通りに実行すると環境変数 SECRET が存在しないため process.env.SECRET は undefined になる
よって ?? の効果で secret は "default" になる

環境変数 SECRET に空文字列を入れると secretはです となる
ここが || との違い "" || v は v だったが "" ?? v は "" になる
なお、空文字列の場合は大体データを使うという操作の需要もあるので一概にすべての場合で ?? を使えばよいというものではない
扱うデータの種類に応じて || と ?? を使い分ける*/

/*使い分け
データがない場合は大体の値を使うというシチュエーションで ?? は適している
|| はから文字列は 0 false などの値もないものとして扱う
データがない状況とから文字列がある状況を区別したいような場合には || よりも ?? が適している*/