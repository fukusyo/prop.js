//var Prop = function(){
//    this._type = "prop";
//    
//    
//}

//プロパティは関数ではなくオブジェクトに設定できる
var Prop = {};
Object.defineProperty(Prop ,"type", {
    get: function(){
        log("ゲット");
        return this._type;
    },
    set: function(value){
        log("セット");
        this._type = value;
    },
});
