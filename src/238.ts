/*null と undefined
null や undefined という値はどちらもデータがないという状況を表すのに有用
2種類こういった概念があるのは JS や TS の特徴
状況によって異なるがデータがない場合には undefined を推奨
TS の言語仕様上、サポートが手厚い*/

const val1 = null;
const val2 = undefined;

console.log(val1, val2);