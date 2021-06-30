class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase() {
        this.counter++;
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}
function printSomething(num) {
    console.log(`yo! ${num}`);
}
const coolCounter = new Counter(printSomething);
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();