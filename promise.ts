class Test {
    num = 4
    fn = () => {
        console.log(this.num)
    }
    func() {
        console.log(this.num)
    }
}

const a = new Test();

const obj = {
    num: 6,
    fn: a.fn,
    func: a.func
}

a.fn();
obj.fn()

a.func()
obj.func()