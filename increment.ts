function incrementSecond(num: number){
  return num+2;
}
//下記のコードだとエラー
//console.log(increment2("999"))
console.log(incrementSecond(999))

//type annotation
const NUM: number = 123

let x = 1
//上記の記述であってもlet x: number = 1と同じ記述になる。