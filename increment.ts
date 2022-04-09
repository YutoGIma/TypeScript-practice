//JSのコード
function increment(num) {
  return num + 1;
}

//数字型を指定
console.log(increment(999));
//文字型で指定
console.log(increment("999"))

//TypeScriptのコード
function incrementSecond(num: number){
  return num+1;
}
//下記のコードだとエラー
//console.log(increment2("999"))
console.log(incrementSecond(999))