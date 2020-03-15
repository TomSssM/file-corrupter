import { CmdOptions } from './handleCmdOptions';

export class Corrupter {
    private options: CmdOptions;

    constructor(options: CmdOptions) {
        this.options = options;
        this.init();
    }

    private init() {}
}
