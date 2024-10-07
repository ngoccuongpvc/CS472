class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed) {
        this.speed = speed;
    }
    
    static compareBySpeed(a1, a2) {
        if (a1.speed < a2.speed) {
            return -1;
        } else if (a1.speed === a2.speed) {
            return 0;
        } else {
            return 1;
        }
    }
}


class Rabit extends Animal {
    hide() {
        console.log("hides");
    }
}