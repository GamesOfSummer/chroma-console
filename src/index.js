//@ts-ignore
import tinygradient from 'tinygradient';
export class ChCo {
    constructor(keyword) {
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
        if (!!keyword) {
            ChCo.setColor(keyword);
            ChCo.gradientStringBackUp = keyword;
        }
        else {
            ChCo.gradient = tinygradient(ChCo.gradientShorthands.softrainbow);
            ChCo.gradientStringBackUp = 'softrainbow';
        }
    }
    static getGradient(keyword) {
        const gradient = Object.fromEntries(Object.entries(ChCo.gradientShorthands).filter(([key]) => key.includes(keyword)));
        const holder = Object.values(gradient);
        return tinygradient(holder[0]);
    }
    //todo - make this better
    static setColor(keyword) {
        if (keyword) {
            ChCo.gradient = this.getGradient(keyword);
        }
        else {
            ChCo.gradient = tinygradient(ChCo.gradientShorthands.softrainbow);
        }
    }
    static log(inputString) {
        console.log('\x1b[0m', this.formatString(inputString));
    }
    buffer() {
        const holder = '■▣'.repeat(50);
        console.log('\x1b[0m', ChCo.formatString(holder));
    }
    static formatString(input) {
        const backupGraident = ChCo.gradient;
        if (input.length < ChCo.gradient.stops.length) {
            // TODO - redo this logic, it sets the gradient permanently right now
            // ChromaConsole.gradient.stops = [
            //     ChromaConsole.gradient.stops[0],
            //     ChromaConsole.gradient.stops[1],
            // ];
            console.log(this.gradientStringBackUp);
            //console.log(ChCo.gradient.stops.length);
            //var holder = ChCo.gradient.stops.slice(1);
            let holder2 = this.getGradient(this.gradientStringBackUp);
            //var holder = ChCo.gradient.stops.slice(1);
            console.log(holder2);
            return input;
        }
        var colorArray = ChCo.gradient.rgb(input.length);
        let output = '';
        for (let i = 0; i < input.length; i++) {
            var { _r, _g, _b } = colorArray[i];
            output += `\x1b[38;2;${Math.round(_r)};${Math.round(_g)};${Math.round(_b)}m${input[i]}`;
        }
        output += '\x1b[0m';
        ChCo.gradient = backupGraident;
        return output;
    }
}
ChCo.start = () => {
    console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
    console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(21) + ' Starting up ' + '■▣'.repeat(22)));
    console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
    console.log('');
};
ChCo.end = () => {
    console.log('');
    console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
    console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(21) + ' End of program ' + '■▣'.repeat(22)));
    console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
};
ChCo.debug = () => {
    ChCo.start();
    ChCo.end();
};
ChCo.gradientShorthands = {
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
function test() {
    ChCo.debug();
    ChCo.setColor('oldmovie');
    ChCo.debug();
    ChCo.setColor('vaporwave');
    ChCo.debug();
    ChCo.setColor('firewood');
    ChCo.debug();
    ChCo.setColor('rainbow');
    ChCo.debug();
}
//test();
function test2() {
    ChCo.setColor('firewood');
    ChCo.log('aaa');
    //ChCo.log('a');
    //ChCo.log('aaaaaaaaaaaa');
}
test2();
