var reverseMy = function (x) {
    var reversedX = +Math.abs(x).toString().split('').reverse().join('');
    return reversedX > 2147483647 ? 0 : x < 0 ? -reversedX : reversedX;
}

var reverse1 = function(x) {
    var numStr = String(x);
    var resultStr = "";
    if(numStr[0] == "-"){
    	resultStr = resultStr.concat("-",numStr.slice(1).split("").reverse().join(""));
    }else{
    	resultStr = numStr.split("").reverse().join("");
    }
    var num = parseInt(resultStr,10);
    if ( Math.abs(x) < 2147483648 &&  Math.abs(num) < 2147483648){
       return num;
    }else {
    	return 0;
    }
}

// THE FASTEST
var reverse2 = function(x) {
    var y = Math.abs(x);
    var result = 0;
    while(y !== 0){
        result = result * 10 + y % 10;
        y = parseInt(y / 10);
    }
    x > 0 ? result = result : result = -result;
    if(result > 2147483648 || result < -2147483649) return 0;
    return result;
};

//array reverse
var reverse3 = function(x) {
    if(x === 0) return 0;
    var y = Math.abs(x);
    if(y.toString(2).length > 31) return 0;
    y = y.toString().split("").reverse();
    while(y[0] === 0){
        y.splice(0,1);
    }
    y = Number(y.join(""))
    if(y.toString(2).length > 31) return 0;
    return x > 0 ? y : - y;
};

// https://discuss.leetcode.com/topic/101691/solution-in-javascript
var reverse4 = function(x) {    
    var res = x >= 0 ? '' : '-';
    x = Math.abs(x);
    
    var len = x.toString().length;
    var itemArr = [];
    itemArr[0] = Math.floor(x / Math.pow(10, len - 1));
    itemArr[len - 1] = x % 10;
    
    for (var i = 1; i < len - 1; i ++) { 
        itemArr[i] = Math.floor((x % Math.pow(10, len - i)) / Math.pow(10, len - i - 1));
    }
    
    for (var i = len - 1; i >= 0; i --) {
        res += itemArr[i];  
    }    
    
    res = res * 1;
     if (Math.abs(res) > Math.pow(2, 32 - 1)) {
        return 0;
    }
    
    return res;
};

console.time("MySolution");
console.log(reverseMy(214748364));
console.timeEnd("MySolution");

console.log("*******************************");

console.time("Best-1");
console.log(reverse1(214748364));
console.timeEnd("Best-1");

console.log("*******************************");

console.time("Best-2");
console.log(reverse2(214748364));
console.timeEnd("Best-2");

console.log("*******************************");

console.time("Best-3");
console.log(reverse3(214748364));
console.timeEnd("Best-3");

console.log("*******************************");

console.time("Best-4");
console.log(reverse4(214748364));
console.timeEnd("Best-4");

