function Bomb(timer: number, message: string) {
    this.message = message;
    console.log(Object.getOwnPropertyNames(this));
    // this.prototype.message = message;

    setTimeout(this.boom.bind(this), timer);
}

Bomb.prototype.boom = function () {
    console.log(this.message);
};

// Bomb.prototype.boom = () => console.log(this.message);

new Bomb(1000, 'Boom');
