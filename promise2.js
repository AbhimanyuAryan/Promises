
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
           return reject(new Error('delay requires a valid number'));
        }
        setTimeout(resolve, time);
    })

}

function sayHello(){
    createP('hello');
}