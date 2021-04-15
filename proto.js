function A() {
    this.a = 1
}

A.prototype.a = 2
A.prototype.fn = function() {
    console.log(this.a)
}

const a = new A();
console.log(Object.getOwnPropertyNames(a))
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(a)))
a.fn()