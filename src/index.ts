var tinygradient = require('tinygradient');
var os = require('os');

const sampleJson = {
    glossary: {
        title: 'example glossary',
        GlossDiv: {
            title: 'S',
            GlossList: {
                GlossEntry: {
                    ID: 'SGML',
                    SortAs: 'SGML',
                    GlossTerm: 'Standard Generalized Markup Language',
                    Acronym: 'SGML',
                    Abbrev: 'ISO 8879:1986',
                    GlossDef: {
                        para: 'A meta-markup language, used to create markup languages such as DocBook.',
                        GlossSeeAlso: ['GML', 'XML'],
                    },
                    GlossSee: 'markup',
                },
            },
        },
    },
};

interface CocoColor {
    name: string;
    windowsGradient: string[];
    macGradient: number[];
}

export class Coco {
    static softRainbowDefault: CocoColor = {
        name: 'softrainbow',
        windowsGradient: [
            '#c1153d',
            '#dd901c',
            '#efe52d',
            '#5eef2d',
            '#2750f4',
            '#2914e5',
        ],
        macGradient: [
            196, 160, 202, 166, 208, 172, 226, 190, 192, 195, 159, 177, 117,
        ],
    };

    static gradientShorthands: CocoColor[] = [
        {
            name: 'purplehaze',
            windowsGradient: ['#9900ff', '#cc99ff'],
            macGradient: [93, 92, 91, 99, 98, 97],
        },
        {
            name: 'vaporwave',
            windowsGradient: ['#0000ff', '#ff3399', '#00ffcc'],
            macGradient: [93, 99, 105, 111, 117, 123],
        },
        {
            name: 'oldmovie',
            windowsGradient: [
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
            macGradient: [255, 254, 253, 252, 251, 250],
        },

        {
            name: 'firewood',
            windowsGradient: [
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
            macGradient: [88, 94, 130, 124],
        },

        Coco.softRainbowDefault,
        {
            name: 'red',
            windowsGradient: ['#f13f29', '#f13f29'],
            macGradient: [196],
        },
        {
            name: 'orange',
            windowsGradient: ['#f6b954', '#f6b954'],
            macGradient: [214],
        },
        {
            name: 'yellow',
            windowsGradient: ['#f9fc39 ', '#f9fc39 '],
            macGradient: [226],
        },
        {
            name: 'green',
            windowsGradient: ['#4fe71b', '#4fe71b'],
            macGradient: [118],
        },
        {
            name: 'blue',
            windowsGradient: ['#39c7fc', '#39c7fc'],
            macGradient: [159],
        },
        {
            name: 'purple',
            windowsGradient: ['#fc39f6', '#fc39f6'],
            macGradient: [207],
        },
        {
            name: 'white',
            windowsGradient: ['#ffffff', '#ffffff'],
            macGradient: [15],
        },
    ];

    static gradient = this.softRainbowDefault!;

    static lorenLipsumString: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    constructor() {}

    static isBrowser(): boolean {
        try {
            if (window === undefined || !window) {
                return false;
            }

            return !!window;
        } catch {
            return false;
        }
    }

    static getGradient(keyword: string): CocoColor {
        if (!keyword) {
            return Coco.softRainbowDefault;
        }

        const gradient = Coco.gradientShorthands.find(
            (obj) => obj.name === keyword
        );

        if (gradient === undefined) {
            return Coco.softRainbowDefault;
        }

        return gradient;
    }

    static setColor(keyword: string) {
        Coco.gradient = this.getGradient(keyword);
    }

    static log(inputString: any) {
        if (Coco.isBrowser()) {
            console.log(this.formatStringForWindows(inputString));
        } else if (os.platform() === 'win32') {
            console.log('\x1B[0m', this.formatStringForWindows(inputString));
        } else {
            console.log('\x1B[0m', this.formatStringForMac(inputString));
        }
    }

    static formatStringForMac(input: any) {
        if (typeof input === 'object') {
            input = JSON.stringify(input, null, 2);
        }

        var inputArray = Array.from(input);
        var colorArrayIndex = 0;

        var colorArray = Coco.gradient.macGradient;
        let outputString = '';

        for (let i = 0; i < inputArray.length; i++) {
            if (input[i] !== '') {
                colorArrayIndex++;
                if (colorArrayIndex > colorArray.length - 1) {
                    colorArrayIndex = 0;
                }
                outputString += `\x1B[38;5;${colorArray[colorArrayIndex]}m${inputArray[i]}`;
            }
        }

        outputString += '\x1B[0m';
        return outputString;
    }

    static formatStringForWindows(input: any) {
        if (typeof input === 'object') {
            input = JSON.stringify(input, null, 2);
        }

        const backupGraident = Coco.gradient;

        if (input.length == 0) {
            return input;
        } else if (input.length < 3) {
            let editedGradient = Coco.gradient.windowsGradient;

            let output = '';

            for (let i = 0; i < input.length; i++) {
                // @ts-ignore
                var { _r, _g, _b } = editedGradient[i].color;
                output += `\x1b[38;2;${Math.round(_r)};${Math.round(
                    _g
                )};${Math.round(_b)}m${input[i]}`;
            }
            output += '\x1b[0m';

            return output;
        } else {
            if (
                input.length <
                tinygradient(Coco.gradient?.windowsGradient).stops.length
            ) {
                var holder2 = tinygradient(
                    Coco.gradient?.windowsGradient
                ).stops.slice(0, input.length - 1);
                Coco.gradient = tinygradient(holder2);
            }

            var colorArray = tinygradient(Coco.gradient?.windowsGradient).rgb(
                input.length
            );
            let output = '';

            for (let i = 0; i < input.length; i++) {
                // @ts-ignore
                var { _r, _g, _b } = colorArray[i];
                output += `\x1B[38;2;${Math.round(_r)};${Math.round(_g)};${Math.round(_b)}m${input[i]}`;
            }

            output += '\x1B[0m';

            Coco.gradient = backupGraident;
            return output;
        }
    }

    static red = (value: string) => {
        const currentGradient = Coco.gradient;
        Coco.setColor('red');
        Coco.log(value);
        Coco.setColor(currentGradient.name);
    };

    static orange = (value: string) => {
        const currentGradient = Coco.gradient;
        Coco.setColor('orange');
        Coco.log(value);
        Coco.setColor(currentGradient.name);
    };

    static yellow = (value: string) => {
        const currentGradient = Coco.gradient;
        Coco.setColor('yellow');
        Coco.log(value);
        Coco.setColor(currentGradient.name);
    };

    static green = (value: string) => {
        const currentGradient = Coco.gradient;
        Coco.setColor('green');
        Coco.log(value);
        Coco.setColor(currentGradient.name);
    };

    static blue = (value: string) => {
        const currentGradient = Coco.gradient;
        Coco.setColor('blue');
        Coco.log(value);
        Coco.setColor(currentGradient.name);
    };

    static purple = (value: string) => {
        const currentGradient = Coco.gradient;
        Coco.setColor('purple');
        Coco.log(value);
        Coco.setColor(currentGradient.name);
    };

    static white = (value: string) => {
        const currentGradient = Coco.gradient;
        Coco.setColor('white');
        Coco.log(value);
        Coco.setColor(currentGradient.name);
    };

    static consoleRedOrGreen = (value: any) => {
        let str = value.replace('!', '').replace('!', '') + '';

        if (eval(value)) {
            console.log('\x1b[0;32m', str + ' => ' + eval(value));
        } else {
            console.log('\x1b[0;31m', str + ' => ' + eval(value));
        }
    };

    buffer() {
        const holder = '■▣'.repeat(50);
        Coco.formatStringForWindows(holder);
    }

    static start = () => {
        console.log('');
        Coco.log('■▣'.repeat(50));
        Coco.log('■▣'.repeat(21) + ' Starting up~ ' + '■▣'.repeat(22));
        Coco.log('■▣'.repeat(50));
        console.log('');
    };

    static end = () => {
        console.log('');
        Coco.log('■▣'.repeat(50));
        Coco.log('■▣'.repeat(21) + ' End of program ' + '■▣'.repeat(21));
        Coco.log('■▣'.repeat(50));
        console.log('');
    };

    static testForCharacterLengths = () => {
        Coco.start();
        Coco.log('a');
        Coco.log('aa');
        Coco.log('aaa');
        Coco.log('aaaa');
        Coco.log('aaaaa');
        Coco.log('aaaaaaaaaa');
        Coco.log(Coco.lorenLipsumString);
        Coco.end();
    };

    static debug = () => {
        Coco.testForCharacterLengths();

        Coco.setColor('purplehaze');
        Coco.testForCharacterLengths();

        Coco.setColor('vaporwave');
        Coco.testForCharacterLengths();

        Coco.setColor('oldmovie');
        Coco.testForCharacterLengths();

        Coco.setColor('firewood');
        Coco.testForCharacterLengths();
    };
}

Coco.debug();

Coco.red('RED TEXT');
Coco.orange('ORANGE TEXT');
Coco.yellow('YELLOW TEXT');
Coco.green('GREEN TEXT');
Coco.blue('BLUE TEXT');
Coco.purple('PURPLE TEXT');
Coco.white('WHITE TEXT');

Coco.log('RAINBOW TEXT');
