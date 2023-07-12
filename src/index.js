//@ts-ignore
//import gradient from 'gradient-string';
//@ts-ignore
import tinygradient from 'tinygradient';
//@ts-ignore
// const gradient = require('gradient-string');
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
    console.log(`\x1b[0m`, '\u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592');
    console.log('\n');
};
export const consoleMiniBuffer = () => {
    console.log('\n');
};
export const consoleRed = (value) => {
    console.log('\x1b[0;31m', value);
};
export const consoleOrange = (value) => {
    console.log('\x1b[38;2;255;100;0m', value);
};
export const consoleYellow = (value) => {
    console.log('\x1b[0;33m', value);
};
export const consoleGreen = (value) => {
    console.log('\x1b[0;32m', value);
};
export const consoleBlue = (value) => {
    console.log('\x1b[0;36m', value);
};
export const consolePurple = (value) => {
    console.log('\x1b[38;2;179;124;255m', value);
};
export const consoleWhite = (value) => {
    console.log('\x1b[0m', value);
};
export const consoleRedOrGreen = (value) => {
    let str = value.replace('!', '').replace('!', '') + '';
    if (eval(value)) {
        console.log('\x1b[0;32m', str + ' => ' + eval(value));
    }
    else {
        console.log('\x1b[0;31m', str + ' => ' + eval(value));
    }
};
function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
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
export function rainbowConsoleText(text, saturation = 100, lightness = 50, repetitionsPerString = 2) {
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
export function cursor(frame) {
    if (frame % 2 === 0) {
        return '•';
    }
    return '◦';
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function randomUnicode() {
    let array = ['Ο', 'Φ', 'Δ'];
    return array[getRandomInt(array.length)];
}
function test() {
    consoleStart();
    //rainbowConsoleText(holder);
    //rainbowConsoleText('Lisa Frank : ' + loren);
    var loren = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    var holder = '■'.repeat(100);
    consoleRed(`red`);
    consoleOrange(`orange`);
    consoleYellow(`yellow`);
    consoleGreen(`green`);
    consoleBlue(`blue`);
    consolePurple(`purple`);
    consoleWhite(`white`);
    consoleMiniBuffer();
    consoleEnd();
    var rainbow = new CConsole(tinygradient([
        '#c1153d',
        '#dd901c',
        '#efe52d',
        '#5eef2d',
        '#2750f4',
        '#2914e5',
    ]));
    rainbow.log('test output from class');
    rainbow.log(loren);
    rainbow.buffer();
    var rainbow2 = new CConsole();
    rainbow2.log('test output from class');
    rainbow2.log(loren);
    rainbow2.buffer();
}
export class CConsole {
    constructor(gradientInput) {
        this.gradientShorthands = {
            atlas: ['#feac5e', '#c779d0', '#4bc0c8'],
            vaporwave: ['#0000ff', '#ff3399', '#00ffcc'],
            softrainbow: [
                '#c1153d',
                '#dd901c',
                '#efe52d',
                '#5eef2d',
                '#2750f4',
                '#2914e5',
            ],
            oldmovie: [
                '#F8F9FA',
                '#E9ECEF',
                '#DEE2E6',
                '#CED4DA',
                '#ADB5BD',
                '#6C757D',
                '#495057',
                '#343A40',
                '#212529',
            ],
            firewood: [
                '#03071E',
                '#370617',
                '#6A040F',
                '#9D0208',
                '#D00000',
                '#DC2F02',
                '#E85D04',
                '#F48C06',
                '#FAA307',
            ],
        };
        this.gradient = this.gradientShorthands.atlas;
        this.gradient = gradientInput;
    }
    log(inputString) {
        console.log('\x1b[0m', this.formatString(inputString, this.gradient));
    }
    buffer() {
        var holder = '■'.repeat(100);
        console.log('\x1b[0m', this.formatString(holder, this.gradient));
    }
    formatString(input, gradient) {
        if (!!input === false) {
            return;
        }
        if (!!gradient === false) {
            gradient = tinygradient(this.gradientShorthands.oldmovie);
        }
        var colorArray = gradient.rgb(input.length);
        let output = '';
        for (let i = 0; i < input.length; i++) {
            var { _r, _g, _b } = colorArray[i];
            output += `\x1b[38;2;${Math.round(_r)};${Math.round(_g)};${Math.round(_b)}m${input[i]}`;
        }
        output += '\x1b[0m';
        return output;
    }
}
test();
