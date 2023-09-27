# practice_TypeScript
ブルーベリー本の写経用リポジトリ
# 参考書籍
[プロを目指す人のためのTypeScript入門](https://gihyo.jp/book/2022/978-4-297-12747-3)
# 導入メモ
```
nvm install V16.8.0
npm init --yes

//package.json を編集
"main": "index.js",
↓
"main": "index.js",
"type": "module",

npm install --save-dev typescript@4.6.2 @types/node@14.14.10
//tsconfig.json を変更

"target": "es2016", 
↓
"target": "es2020",

"module": "commonjs",
↓
"module": "esnext",

//"moduleResolution": "node",
↓
"moduleResolution": "node",

//"outDir": "./",
↓
"outDir": "./dist",

// compilerOptionsの直後に追記
,
  "include": ["./src/**/*.ts"]
```