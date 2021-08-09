const input = document.querySelector('.result');

function insert(num) {
    input.value += num;
}

function clean() {
    input.value = "";
}

function back() {
    let res = input.value;
    input.value = res.substring(0, res.length-1);
}

function equal() {
    let res = input.value;
    if(res){
        input.value = eval(res);
    }else{
        input.value = 'empty'
    }
}