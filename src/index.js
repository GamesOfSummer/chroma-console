//@ts-ignore
import tinygradient from 'tinygradient';
function test() {
    var loren = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    var holder = '■'.repeat(100);
    // var rainbow = new ChromaConsole(
    //     tinygradient([
    //         '#c1153d',
    //         '#dd901c',
    //         '#efe52d',
    //         '#5eef2d',
    //         '#2750f4',
    //         '#2914e5',
    //     ])
    // );
    // rainbow.log('t');
    // rainbow.log('rainbow test string');
    // rainbow.buffer();
    var rainbow2 = new ChromaConsole();
    rainbow2.consoleStart();
    rainbow2.consoleEnd();
    rainbow2.log('t');
    rainbow2.log('test string');
    rainbow2.log(loren);
    rainbow2.buffer();
    rainbow2.consoleRed('red only');
    rainbow2.consoleOrange('orange only');
    rainbow2.consoleYellow('yellow only');
}
export class ChromaConsole {
    constructor(gradientInput) {
        this.gradientShorthands = {
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
        this.consoleRed = (value) => {
            console.log('\x1b[0;31m', value);
        };
        this.consoleOrange = (value) => {
            console.log('\x1b[38;2;255;100;0m', value);
        };
        this.consoleYellow = (value) => {
            console.log('\x1b[0;33m', value);
        };
        this.consoleGreen = (value) => {
            console.log('\x1b[0;32m', value);
        };
        this.consoleBlue = (value) => {
            console.log('\x1b[0;36m', value);
        };
        this.consolePurple = (value) => {
            console.log('\x1b[38;2;179;124;255m', value);
        };
        this.consoleWhite = (value) => {
            console.log('\x1b[0m', value);
        };
        this.consoleRedOrGreen = (value) => {
            let str = value.replace('!', '').replace('!', '') + '';
            if (eval(value)) {
                console.log('\x1b[0;32m', str + ' => ' + eval(value));
            }
            else {
                console.log('\x1b[0;31m', str + ' => ' + eval(value));
            }
        };
        this.consoleStart = () => {
            console.log('\x1b[0m', this.formatString('■▣'.repeat(50), this.gradientShorthands.softrainbow));
            console.log('\x1b[0m', this.formatString('■▣'.repeat(21) + ' Starting up ' + '■▣'.repeat(22), this.gradientShorthands.softrainbow));
            console.log('\x1b[0m', this.formatString('■▣'.repeat(50), this.gradientShorthands.softrainbow));
            console.log('');
        };
        this.consoleEnd = () => {
            console.log('');
            console.log('\x1b[0m', this.formatString('■▣'.repeat(50), this.gradientShorthands.softrainbow));
            console.log('\x1b[0m', this.formatString('■▣'.repeat(21) + ' End of program ' + '■▣'.repeat(22), this.gradientShorthands.softrainbow));
            console.log('\x1b[0m', this.formatString('■▣'.repeat(50), this.gradientShorthands.softrainbow));
        };
        this.gradient = gradientInput;
    }
    log(inputString) {
        console.log('\x1b[0m', this.formatString(inputString, this.gradient));
    }
    buffer() {
        var holder = '■▣'.repeat(50);
        console.log('\x1b[0m', this.formatString(holder, this.gradient));
    }
    formatString(input, gradient) {
        if (!gradient || !gradient.stops) {
            gradient = tinygradient(this.gradientShorthands.softrainbow);
        }
        if (!!input === false) {
            return;
        }
        else if (input.length < gradient.stops.length) {
            gradient.stops = [gradient.stops[0], gradient.stops[1]];
            return input;
        }
        else {
            if (!!gradient === false) {
                gradient = tinygradient(this.gradientShorthands.softrainbow);
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
}
test();
