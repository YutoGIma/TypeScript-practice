function incrementSecond(num) {
    return num + 2;
}
//下記のコードだとエラー
//console.log(increment2("999"))
console.log(incrementSecond(999));
//type annotation
var NUM = 123;
var x = 1;
//上記の記述であってもlet x: number = 1と同じ記述になる。
