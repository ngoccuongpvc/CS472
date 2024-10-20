var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Animal.prototype.run = function (speed) {
        this.speed = speed;
    };
    Animal.compareBySpeed = function (a1, a2) {
        if (a1.speed < a2.speed) {
            return -1;
        }
        else if (a1.speed === a2.speed) {
            return 0;
        }
        else {
            return 1;
        }
    };
    return Animal;
}());
var Rabit = /** @class */ (function (_super) {
    __extends(Rabit, _super);
    function Rabit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rabit.prototype.hide = function () {
        console.log("hides");
    };
    return Rabit;
}(Animal));
var rabbit = new Rabit("Speed", 1);
rabbit.run(100);
rabbit.hide();
