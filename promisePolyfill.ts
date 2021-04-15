class PromisePol {
    private value;
    private state = 'pending';
    private reason;
    constructor(executor) {
        const resolve = (value) => {
            this.state = 'fulfilled';
            this.value = value;
        };

        const reject = (reason) => {
            this.state = 'rejected';
            this.reason = reason;
        };

        executor(resolve, reject);

        return this;
    }

    then(executor) {
        try {
            if (this.state === 'fulfilled') {
                executor(this.value);
                return this;
            }
            return this;
        } catch (error) {
            this.state = 'rejected';
            this.reason = error;
            return this;
        }
    }

    catch(executor) {
        try {
            if (this.state === 'rejected') {
                this.state = 'fulfilled';
                executor(this.reason);
                return this;
            }
            return this;
        } catch (error) {
            this.state = 'rejected';
            this.reason = error;
            return this;
        }
    }
}

const p = new PromisePol((resolve, reject) => (
	Math.round(Math.random() * 10) % 2 === 0
		? resolve()
		: reject()
));

p
	.then(function () {
		console.log('then1');
	})
    .then(function () {
		console.log('then2');
	})
    .catch(function () {
		console.log('rejected1');
	})
    .then(function () {
		console.log('then3');
	})
    .then(function () {
		console.log('then4');
	})
	.catch(function () {
		console.log('rejected2');
	});
