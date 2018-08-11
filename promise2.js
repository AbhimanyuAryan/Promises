
function setup() {
    noCanvas();
    delay(1000)
    .then(() => createP('hello'))
    .catch((err) => console.error(err))

    delay('promising');
}

async function delayES8(time) {
    // If below function returns a promise
    await delay(time); // kind of like writing blocking code
    // await someThingElse();
    // let val = await SomethingElseElse();

    return;
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