import commandLineArgs from 'command-line-args';
import { optionDefinitions, verifyCmdOptions } from './handleCmdOptions';
import { pipe, printError } from './utils';

const app = () => {
    let isDebug = false;
    try {
        const options = commandLineArgs(optionDefinitions);
        isDebug = options.debug;

        return pipe(verifyCmdOptions)(options);
    } catch (e) {
        const message = isDebug ? e.stack : e.message;

        printError(message);
    }
};

export default app;
