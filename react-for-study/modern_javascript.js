// 1-3-1変数の宣言

/*
let varの違い
　　varは再代入可能
　　letは再代入不可
*/
// let:変数宣言
let name = 'Tom';
console.log('hello ' + name);   // hello Tom

// const:定数宣言
const age = 28; // 定数宣言
console.log('age: ' + age); // age: 28
//constは、”再代入できない”が、オブジェクトのプロパティは変更可能
//一般的にconstとletでは、constを優先して使う


// 1-3-2主なリテラル表現
// テンプレート文字列
const msg = `hello, ${name} How are you?`;
console.log(msg); // hello, Tom How are you?

//アロー関数
/*(arg,…) => {statements}*/
function circle(radius) {
    return (radius ** 2) * Math.PI;
}
const circleArea = radius => {
    return (radius ** 2) * Math.PI;
}
//関数本体が1文である場合
const circleArea2 = (radius) => (radius ** 2) * Math.PI;
//引数が1個の場合
const circleArea3 = radius => radius ** 2 * Math.PI;
//引数がない場合
const show = () => console.log('Hello, world!');

console.log(circle(2)); // 12.566370614359172   // 半径2の円の面積 
console.log(circleArea(2)); // 12.566370614359172   // 半径2の円の面積
console.log(circleArea2(2)); // 12.566370614359172   // 半径2の円の面積
console.log(circleArea3(2)); // 12.566370614359172   // 半径2の円の面積 
show(); // Hello, world!

//オブジェクトリテラルの簡易構文
const title = 'title';
const content = 'content';
const article = {
    title,
    content
};
console.log(article); // {title: "title", content: "content"}   // オブジェクトリテラルの簡易構文
//メソッドの簡易構文
const member1 = {
    name: 'Alice',
    greet() {
        console.log('hello, ' + this.name);
    }
}
//プロパティの動的生成
let i = 0;
const obj = {
    [`attr${++i}`]:'value1',
    [`attr${++i}`]:'value2',
    [`attr${++i}`]:'value3'
};
console.log(obj); // {attr1: "value1", attr2: "value2", attr3: "value3"}

// 1-3-3分割代入
const arr = [1, 2, 3];
const [a, b, c] = arr;  // 分割代入
console.log(a, b, c); // 1 2 3
//オブジェクトの分割代入
const [x, y] = arr;
console.log(x, y); // 1 2

//オブジェクトの場合
const member = {fullname: '五十嵐真人', birthday: '2000/09/22', sex:'male'};
const {fullname, birthday, memo = '----'} = member;
console.log(fullname, birthday, memo); // 五十嵐真人 2000/09/22 ----
console.log(member); // {fullname: "五十嵐真人", birthday
//オブジェクトよりも複雑な例
const {sex : gender} = member;
console.log(gender);
//残りの要素をまとめて取得
const {fullname: name2, ...others} = member;
console.log(name2, others); // 五十嵐真人 {birthday: "2000/09
//宣言文と代入文を分ける
let x2, y2;
({x2, y2} = {x2: 1, y2: 2});
console.log(x2, y2); // 1 2

//1-3-4引数の既定値構文、可変長引数
//引数の既定値構文
function getTrapezoidArea(upper = 1, lower = 1, height = 1) {
    return (upper + lower) * height / 2;
}
console.log(getTrapezoidArea(2, 3, 4)); // 10
console.log(getTrapezoidArea(2, 3)); // 2
console.log(getTrapezoidArea(2)); // 1
console.log(getTrapezoidArea()); // 0.5
//可変長引数
function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        result += num;
    }
    return result;
}
console.log(sum(1, 2, 3)); // 6
//スプレッド構文による引数展開
console.log(sum([10, 25, 2]))
console.log(sum(...[10, 25, 2]))
//分割代入によるオブジェクト引数分解
function showInfo({name, age}) {
    console.log(`こんにちは、私は、${name}です。${age}歳です。`);
}
const member2 = {name: 'Alice', age: 20, sex:'female'};
showInfo(member2); // こんにちは、私は、Aliceです。20歳です。

//1-3-5Optional Chaining演算子(?.)
const str = null;
console.log(str?.substring(1)); // null
//Null 合体演算子
let value = null;
console.log(value ?? 'default value'); // default value
//式 ?? 値とすることで、左辺がnullまたはundefinedの場合に右辺の値を返す

//1-3-6モジュール
//モジュールを定義
const APP_TITLE = 'My App';
export function getTriangleArea(base, height) {
    return base * height / 2;
}
export class Article {
    getAppTitle() {
        return APP_TITLE
    }
}