
function setup() {
    noCanvas();
    delay(1000)
    .then(() => createP('hello'))
    .catch((err) => console.error(err))

    delay('promising');
}

function delay(time){
    return new Promise((resolve, reject) => {
        if(isNaN(time)) {
            reject();
        }
        setTimeout(resolve, time);
    })

}

function sayHello(){
    createP('hello');
}