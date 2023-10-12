/*エスケープシーケンス
\ で始まる
\n や \t など
\ 自体を文字列に含めるには \\ とする*/

console.log("Hello \\world/");

/*Unicodeコードポイントを使って書けるエスケープシーケンス
JavascriptはUTF-16で表現される
例えば A には U+0041 が 祭 には U+796D が割り振られている
\u{xxxx} と表記する*/

console.log("Hello \u{796d} world!");