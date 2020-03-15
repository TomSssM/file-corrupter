export enum CORRUPT_SIZE {
    BYTE = 'byte',
    BIT = 'bit',
}

export const CORRUPT_SIZES = Object.values(CORRUPT_SIZE);

export enum CORRUPT_TYPE {
    DELETE = 'delete',
    SWAP = 'swap',
}

export const CORRUPT_TYPES = Object.values(CORRUPT_TYPE);

export enum CORRUPT_POSITION {
    START = 'start',
    MIDDLE = 'middle',
    END = 'end',
    RANDOM = 'random',
}

export const CORRUPT_POSITIONS = Object.values(CORRUPT_POSITION);

export const COMMAND_NAME = 'file-corrupter';
