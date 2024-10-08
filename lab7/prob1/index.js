class Meditation {
    #countdown

    constructor(countdown) {
        this.#countdown = countdown;
    }

    start() {
        let n = this.#countdown;
        const intervalId = setInterval(() => {
            console.log(n);
            n--;
        }, 1000);
        setTimeout(() => {
            clearInterval(intervalId);
            console.log("Jay Guru Dev");
        }, (this.#countdown + 1) * 1000);
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev