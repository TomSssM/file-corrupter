import { CmdOptions, renderUsageGuide } from './handleCmdOptions';
import { Corrupter } from './transform';

export const handleCmdOptions = (options: CmdOptions) => {
    if (options.help) {
        renderUsageGuide();
    } else {
        new Corrupter(options);
    }
};
