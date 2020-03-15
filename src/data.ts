import { OptionDefinition, Section } from 'command-line-usage';
import {
    CORRUPT_POSITION,
    CORRUPT_POSITIONS,
    CORRUPT_SIZE,
    CORRUPT_SIZES,
    CORRUPT_TYPE,
    CORRUPT_TYPES,
    COMMAND_NAME,
} from './const';
import { chalkTemplateString, colors } from './utils';

const commandName = colors.bright(COMMAND_NAME);

export const optionDefinitions: OptionDefinition[] = [
    {
        name: 'help',
        alias: 'h',
        defaultValue: false,
        type: Boolean,
        description: 'Display the usage guide',
    },
    {
        name: 'debug',
        defaultValue: false,
        type: Boolean,
        description:
            'If an internal error occurs provide technical information',
    },
    {
        name: 'size',
        alias: 's',
        defaultValue: CORRUPT_SIZE.BYTE,
        type: String,
        typeLabel: chalkTemplateString('underline', CORRUPT_SIZES),
        description: 'Whether to corrupt one bit or one byte',
    },
    {
        name: 'type',
        alias: 't',
        defaultValue: CORRUPT_TYPE.SWAP,
        type: String,
        typeLabel: chalkTemplateString('underline', CORRUPT_TYPES),
        description: 'Technique via which to corrupt',
    },
    {
        name: 'pos',
        alias: 'p',
        defaultValue: CORRUPT_POSITION.MIDDLE,
        type: String,
        typeLabel: chalkTemplateString('underline', CORRUPT_POSITIONS),
        description: 'Where to corrupt the file',
    },
];

export const sections: Section[] = [
    {
        header: 'File Corrupter CLI Tool',
        content:
            'Use it with great care to simulate file corruption, useful for testing tools like md5checksum to verify file integrity',
    },
    {
        header: 'Synopsis',
        content: `$ ${commandName} <path-to-file> <options>`,
    },
    {
        header: 'Options',
        optionList: optionDefinitions,
    },
    {
        header: 'Examples',
        content: [
            {
                desc: 'Corrupt file:',
                example: `$ ${commandName} ./file1.mkv`,
            },
            {
                desc: 'Corrupt file using a different corrupt style:',
                example: `$ ${commandName} ./file2.mkv --type delete`,
            },
            {
                desc: 'Corrupt file by messing with the last bit:',
                example: `$ ${commandName} ./file3.mkv --size bit --pos end`,
            },
            {
                desc: 'Corrupt file by deleting a byte from the middle:',
                example: `$ ${commandName} ./file4.mkv --size byte --pos middle --type delete`,
            },
        ],
    },
];
