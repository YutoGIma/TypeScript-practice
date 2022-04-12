function increment(num) {
    return num + 2;
}
//下記のコードだとエラー
//console.log(increment("999"))
console.log(increment(999));
//type annotation
var NUM = 123;
var x = 1;
//上記の記述であってもlet x: number = 1と同じ記述になる。
//JavaScriptのデータ型は、プリミティブ型とオブジェクト型の二種類
//プリミティブ型は値を直接変更できない、オブジェクト型は値を後で変更できる
//プリミティブ型をまるでオブジェクトのように扱えるのはJavaScriptの特徴
console.log("name".length);
//4
