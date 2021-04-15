function abc() {
    this.name = 'abc'
    const a = () => {
        console.log(this)
    }
    a()
}

const obj = {
    nameObj: 'obj',
    fn: abc
}

obj.fn()
abc()

console.log(42 == '42')