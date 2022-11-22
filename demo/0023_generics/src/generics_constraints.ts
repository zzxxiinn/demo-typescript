interface IExecutable {
    run(): void;
}

interface IExecutor<T extends IExecutable> {
    runSafe(executor: T): void;
}

// more complex constraint
interface IPrintable<U> {
    run(): U;
}

interface IPrinter<T extends IPrintable<U>, U> {
    printSafe(printable: T): U;
}

// event more complex
interface IReadable<U, V> {
    read(parameter: U): V;
}

interface IReader<T extends IReadable<U, V>, U, V> {
    readSafe(readable: T, parameter: U): V;
}