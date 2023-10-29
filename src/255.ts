//while文によるループ

let sum = 0;
let i = 1;

/*while(i <= 100){
    sum += i;
    i++;
}*/

//break の使いどころとしてはif文と組み合わせてループの終了条件を記述するというものが挙げられる

/*while(true){
    if(i > 100){
        break;
    }
    sum += i;
    i++;
}*/

//continue 文はループの先頭に戻るという働きを持つ
//ブロックの途中にいたとしてもそのブロックを中断して while 文の先頭に戻る
//while の先頭に戻った場合、条件式の判定は再び行われる
//真だった場合は再びループが実行され、偽だった場合はそのまま while を終了する
//やや無理矢理だがこのように利用できる

while(i <= 100){
    i++;
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}

//console.log(sum); //5050