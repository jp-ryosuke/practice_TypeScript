//プロパティアクセス 値の取得と代入

const user ={
    name: "uhyo",
    age: 25,
};

user.age = 26;
console.log(user.age);


import {createInterface} from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const message = {
    good: "0以上の数値が入力されました",
    bad: "負の数値を入力しないでください",
}

rl.question('数値を入力してください:', (line) => {
    const num = Number(line);
    console.log(message[num >= 0 ? "good" : "bad"]);
    rl.close();
})