//コンパイル
// tsc increment.ts


function increment(num: number){
  return num+2;
}
//下記のコードだとエラー
//console.log(increment("999"))
console.log(increment(999))

//type annotation
const NUM: number = 123

let x = 1
//上記の記述であってもlet x: number = 1と同じ記述になる。

//JavaScriptのデータ型は、プリミティブ型とオブジェクト型の二種類
//プリミティブ型は値を直接変更できない、オブジェクト型は値を後で変更できる

//プリミティブ型をまるでオブジェクトのように扱えるのはJavaScriptの特徴
console.log("name".length)
//4

// プリミティブ型の種類
// プリミティブ型は次の7つがあります。

// 論理型(boolean): trueまたはfalseの真偽値。
// 数値型(number): 0や0.1のような数値。
// 文字列型(string): "Hello World"のような文字列。
// undefined型: 値が未定義であることを表す型。
// ヌル型(null): 値がないことを表す型。
// シンボル型(symbol): 一意で不変の値。
// bigint型: 9007199254740992nのようなnumber型では扱えない大きな整数型。

// 上のプリミティブ型以外は、JavaScriptにおいてはすべてオブジェクトと考えて問題ない

//論理型
const isOk: boolean =true;
if(isOk){
  console.log("isOk is true")
}

// 三項演算子
const age = 20;
const drink = age >= 20 ? "ビール" : "ジュース";
console.log(drink);