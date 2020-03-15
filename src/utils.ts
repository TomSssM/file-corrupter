import { Pipe, ChalkTemplateStyle } from './types';
import colors from './colors';

export const pipe: Pipe = (fn, ...fns) => (...args) =>
    fns.reduce((acc, fn) => fn(acc), fn(...args));

export const printError = (str: string) => {
    console.log(`\n${colors.bright('ERROR')}: ${str}\n`);
    process.exit(1);
};

const wrap = (left: string, right: string, val: string) => {
    return left + val + right;
};

export const chalkTemplateString = (
    style: ChalkTemplateStyle,
    list: any[] | string,
) => {
    const wrapChalk = wrap.bind(null, `{${style} `, '}');
    return Array.isArray(list)
        ? list.map((val: string) => wrapChalk(val)).join(', ')
        : wrapChalk(list);
};

export { colors };
