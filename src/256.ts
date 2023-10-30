//for 文によるループ
//for(let 変数名 = 初期化式; 条件式; 更新式)文

let summary = 0;
for (let i: number = 1; i <= 100; i++) {
    summary += i;   
}
console.log(summary); //505

/*
for文内で continue を使用した場合更新式が実行されてから次のループに進みます
この点は while 文にはない特殊な挙動です
*/

for(let i = 1; i <= 100; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i); //2,4,6,...,100
}