import commandLineArgs from 'command-line-args';
import { verifyCmdOptions } from './handleCmdOptions';
import { handleCmdOptions } from './controller';
import { pipe, printError } from './utils';
import { optionDefinitions } from './data';

const app = () => {
    let isDebug = false;
    try {
        const options = commandLineArgs(optionDefinitions, { partial: true });

        isDebug = options.debug;

        return pipe(verifyCmdOptions, handleCmdOptions)(options);
    } catch (e) {
        const message = isDebug ? e.stack : e.message;
        printError(message);
    }
};

export default app;
