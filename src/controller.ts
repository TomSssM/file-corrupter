import { CmdOptions, renderUsageGuide } from './handleCmdOptions';

export const handleCmdOptions = (options: CmdOptions) => {
    if (options.help) {
        renderUsageGuide();
    } else {
        console.log(`Gotta process ${options.file} :)`);
    }
};
