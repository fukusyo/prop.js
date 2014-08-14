var log = (function(){return console.log.bind(console);})();

log("hello");

//a = new Prop();
a = Prop; //オブジェクトをセット
a.type = "ぷろっぷ";//プロパティにセット

b = new Prop();
b.type = "コンストラクタ";

console.log(a);
console.log(b);
