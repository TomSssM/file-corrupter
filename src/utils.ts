export const pipe = <T extends any[], R>(
    fn1: (...args: T) => R,
    ...fns: Array<(a: R) => R>
) => {
    const piped = fns.reduce(
        (prevFn, nextFn) => (value: R) => nextFn(prevFn(value)),
        (value) => value,
    );
    return (...args: T) => piped(fn1(...args));
};

export const printError = (str: string) => {
    console.log(`ERROR: ${str}`);
    process.exit(1);
};
