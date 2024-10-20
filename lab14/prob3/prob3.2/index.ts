class Animal {
    name: string;
    speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    run(speed: number): void {
        this.speed = speed;
    }
    
    static compareBySpeed(a1: Animal, a2: Animal): number {
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
    hide(): void {
        console.log("hides");
    }
}

const rabbit: Rabit = new Rabit("Speed", 1);
rabbit.run(100);
rabbit.hide();