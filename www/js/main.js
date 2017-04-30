var array = [0,1,2,3,4,5,6,7,8,9,10];

window.onload = function(){
    document.getElementById("text").innerHTML = array;
    document.getElementById("button").addEventListener('click',function(){
        array = arrayShuffle(array);
        document.getElementById("text").innerHTML = array;
    });
};

// 配列をシャッフルする関数
function arrayShuffle(array){
    var returnArray = new Array(array.length);
    for(var i = array.length; i > 0; i--){
        var rand = Math.floor( Math.random() * i);
        returnArray[i-1] = array[rand];
        for(var j = rand; j < (i-1); j++){
            array[j] = array[j+1];
        };
    };
    return returnArray;
};