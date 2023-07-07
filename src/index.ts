export const consoleStart = () => {
    console.log(`\x1b[0;106m`, 'Running...');
    console.log('\x1b[0m', '');
    console.log('');
};

export const consoleEnd = () => {
    console.log('');
    console.log('');
    console.log(`\x1b[0;106m`, 'Ending...');
    console.log('\x1b[0m', '');
    console.log('');
};

export const consoleBuffer = () => {
    console.log('\n');
    console.log(
        `\x1b[0m`,
        '\u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592'
    );
    console.log('\n');
};

export const consoleMiniBuffer = () => {
    console.log('\n');
};

export const consoleRed = (value: string) => {
    console.log('\x1b[0;31m', value);
};

export const consolePurple = (value: string) => {
    console.log('\x1b[0;32m', value);
};

export const consoleYellow = (value: string) => {
    console.log('\x1b[0;33m', value);
};

export const consoleGreen = (value: string) => {
    console.log('\x1b[0;32m', value);
};

export const consoleBlue = (value: string) => {
    console.log('\x1b[0;36m', value);
};

export const consoleWhite = (value: string) => {
    console.log('\x1b[0m', value);
};

export const consoleRedOrGreen = (value: any) => {
    let str = value.replace('!', '').replace('!', '') + '';

    if (eval(value)) {
        console.log('\x1b[0;32m', str + ' => ' + eval(value));
    } else {
        console.log('\x1b[0;31m', str + ' => ' + eval(value));
    }
};

function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function rainbowConsoleText(
    text,
    saturation = 100,
    lightness = 50,
    repetitionsPerString = 2
) {
    saturation /= 100; // scale down to range [0, 1]
    lightness /= 100; // scale down to range [0, 1]
    let output = '';
    for (let i = 0; i < text.length; i++) {
        let hue = ((i / text.length) * repetitionsPerString) % 1; // scale to range [0, 1]
        let [r, g, b] = hslToRgb(hue, saturation, lightness);
        output += `\x1b[38;2;${r};${g};${b}m${text[i]}`;
    }
    output += '\x1b[0m'; // reset color
    //return output;
    console.log('\x1b[0m', output);
}

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
