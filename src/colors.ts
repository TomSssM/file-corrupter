const COLORS_REFERENCE = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',

    fgBlack: '\x1b[30m',
    fgRed: '\x1b[31m',
    fgGreen: '\x1b[32m',
    fgYellow: '\x1b[33m',
    fgBlue: '\x1b[34m',
    fgMagenta: '\x1b[35m',
    fgCyan: '\x1b[36m',
    fgWhite: '\x1b[37m',

    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m',
};

const ALIASES = {
    b: COLORS_REFERENCE.fgBlue,
    r: COLORS_REFERENCE.fgRed,
    g: COLORS_REFERENCE.fgGreen,
    y: COLORS_REFERENCE.fgYellow,
    m: COLORS_REFERENCE.fgMagenta,
    c: COLORS_REFERENCE.fgCyan,
    w: COLORS_REFERENCE.fgWhite,
    u: COLORS_REFERENCE.underscore,
    bgB: COLORS_REFERENCE.bgBlue,
    bgR: COLORS_REFERENCE.bgRed,
    bgG: COLORS_REFERENCE.bgGreen,
    bgY: COLORS_REFERENCE.bgYellow,
    bgM: COLORS_REFERENCE.bgMagenta,
    bgC: COLORS_REFERENCE.bgCyan,
    bgW: COLORS_REFERENCE.bgWhite,
};

type ColorsKeys = keyof typeof ALIASES | keyof typeof COLORS_REFERENCE;

const allColors: Record<ColorsKeys, string> = {
    ...ALIASES,
    ...COLORS_REFERENCE,
};

const state: string[] = [];

type ColorsFunc = (str: string) => string;

type Colors = ColorsFunc &
    {
        [K in ColorsKeys]: ColorsFunc;
    };

const colors = ((str) => {
    const colorsString = state.join('');
    state.length = 0;
    return colorsString + str + allColors.reset;
}) as Colors;

Object.entries(allColors).forEach(([colorName, colorValue]) => {
    Object.defineProperty(colors, colorName, {
        get() {
            state.push(colorValue);
            return colors;
        },
    });
});

export default colors;
