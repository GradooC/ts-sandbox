function MathCustom(value) {
    this.value = value;
}

MathCustom.prototype = {
    plus(value) {
        this.value = this.value + value;
        return this;
    },
    minus(value) {
        this.value = this.value - value;
        return this;
    },
};

const res2 = new MathCustom(2).plus(3).minus(1);
console.log("🚀 ~ file: math.ts ~ line 17 ~ res2", res2)

