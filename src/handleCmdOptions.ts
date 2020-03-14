import { OptionDefinition, CommandLineOptions } from 'command-line-args';
import { CORRUPT_POSITION, CORRUPT_TYPE, CORRUPT_SIZE } from './const';
import { printError } from './utils';

const verifyCmdOption = (
    option: unknown,
    availableOptions: Record<string, any>,
) => {
    const values = Object.values(availableOptions);

    if (!values.includes(option)) {
        const errorMessage = [
            `Unrecognized option: ${option}`,
            `Available values are: ${values.join(', ')}`,
        ].join('\n');
        printError(errorMessage);
    }
};

export interface CmdOptions {
    size: string;
    type: string;
    pos: string;
}

export const optionDefinitions: OptionDefinition[] = [
    { name: 'help', alias: 'h', defaultValue: false, type: Boolean },
    { name: 'size', alias: 's', defaultValue: CORRUPT_SIZE.BYTE, type: String },
    { name: 'type', alias: 't', defaultValue: CORRUPT_TYPE.SWAP, type: String },
    {
        name: 'pos',
        alias: 'p',
        defaultValue: CORRUPT_POSITION.MIDDLE,
        type: String,
    },
    { name: 'debug', defaultValue: false, type: Boolean },
    { name: 'file', alias: 'f', type: String },
];

export const verifyCmdOptions = (options: CommandLineOptions): CmdOptions => {
    const { size, pos, type, file } = options;

    verifyCmdOption(size, CORRUPT_SIZE);
    verifyCmdOption(pos, CORRUPT_POSITION);
    verifyCmdOption(type, CORRUPT_TYPE);

    if (!file) {
        printError('No file path provided');
    }

    return options as CmdOptions;
};
