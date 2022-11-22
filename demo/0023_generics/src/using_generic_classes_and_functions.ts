interface IRunner {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    runSafe<T extends IRunnable>(runnable: T): void;
}

class Runner implements IRunner {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    public runSafe<T extends IRunnable>(runnable: T) {
        try {
            runnable.run()
        } catch (e) {
            console.log(e)
        }
    }
}


// const stringRunnable = new Runnable<string>();
//
// function runSafe<T extends Runnable<U>, U>(runnable: T) {...};
// // Specify the generic types:
// runSafe<Runnable<string>, string>(stringRunnable);
// // Let typescript figure the generic types by himself:
// runSafe(stringRunnable);