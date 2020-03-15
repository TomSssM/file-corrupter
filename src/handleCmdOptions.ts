import { CommandLineOptions } from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { CORRUPT_POSITIONS, CORRUPT_TYPES, CORRUPT_SIZES } from './const';
import { printError, colors } from './utils';
import { sections } from './data';

const verifyCmdOption = (option: unknown, availableOptions: unknown[]) => {
    if (!availableOptions.includes(option)) {
        const errorMessage = [
            `Unrecognized option: ${option}`,
            `Available values are: ${availableOptions.join(', ')}`,
        ].join('\n');
        printError(errorMessage);
    }
};

export interface CmdOptions {
    size: string;
    type: string;
    pos: string;
    help: boolean;
    debug: boolean;
    file?: string;
}

export const verifyCmdOptions = (options: CommandLineOptions): CmdOptions => {
    const { size, pos, type, help, debug, _unknown } = options;
    const file = _unknown?.[0];

    verifyCmdOption(size, CORRUPT_SIZES);
    verifyCmdOption(pos, CORRUPT_POSITIONS);
    verifyCmdOption(type, CORRUPT_TYPES);

    if (!file && !help) {
        printError(
            `No file path provided, run with ${colors.u('--help')} for more`,
        );
    }

    return {
        size,
        type,
        pos,
        help,
        debug,
        file,
    };
};

const usage = commandLineUsage(sections);

export const renderUsageGuide = () => {
    console.log(usage);
};
