import {
    consoleBlue,
    consoleBuffer,
    consoleEnd,
    consoleRed,
    consoleStart,
    consoleYellow,
    consolePurple,
    consolePurple as consoleGreen,
    consoleWhite,
    consoleRedOrGreen,
    consoleMiniBuffer,
    rainbowConsoleText,
} from './helpers.js';

function test(): void {
    consoleStart();
    rainbowConsoleText(`Let's talk about Javascript primitives! \n`);

    consoleWhite(`vwhite`);

    consoleYellow(`yellow`);

    consoleBuffer();

    consoleRed(`red`);
    consoleGreen(`green`);

    consoleGreen(`green`);

    consoleEnd();
}

test();

export {};
function consoleRaindow(arg0: string) {
    throw new Error('Function not implemented.');
}
