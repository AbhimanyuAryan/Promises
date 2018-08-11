
function setup() {
    noCanvas();
    delay(1000)
    .then(() => createP('hello'))
    .catch((err) => console.error(err))
}

function delay(time){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })

}

function sayHello(){
    createP('hello');
}