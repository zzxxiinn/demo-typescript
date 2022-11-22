class StaticTest {
    static countInstance = 0;

    constructor() {
        StaticTest.countInstance++;
    }
}

new StaticTest();
new StaticTest();

console.log(StaticTest.countInstance); // 2