"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coco = void 0;
var tinygradient = require('tinygradient');
var os = require('os');
var sampleJson = {
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
var Coco = /** @class */ (function () {
    function Coco() {
    }
    Coco.isBrowser = function () {
        try {
            if (window === undefined || !window) {
                return false;
            }
            return !!window;
        }
        catch (_c) {
            return false;
        }
    };
    Coco.getGradient = function (keyword) {
        if (!keyword) {
            return _a.softRainbowDefault;
        }
        var gradient = _a.gradientShorthands.find(function (obj) { return obj.name === keyword; });
        if (gradient === undefined) {
            return _a.softRainbowDefault;
        }
        return gradient;
    };
    Coco.setColor = function (keyword) {
        _a.gradient = this.getGradient(keyword);
    };
    Coco.log = function (inputString) {
        if (_a.isBrowser()) {
            console.log(this.formatStringForWindows(inputString));
        }
        else if (os.platform() === 'win32') {
            console.log('\x1B[0m', this.formatStringForWindows(inputString));
        }
        else {
            console.log('\x1B[0m', this.formatStringForMac(inputString));
        }
    };
    Coco.formatStringForMac = function (input) {
        if (typeof input === 'object') {
            input = JSON.stringify(input, null, 2);
        }
        var inputArray = Array.from(input);
        var colorArrayIndex = 0;
        var colorArray = _a.gradient.macGradient;
        var outputString = '';
        for (var i = 0; i < inputArray.length; i++) {
            if (input[i] !== '') {
                colorArrayIndex++;
                if (colorArrayIndex > colorArray.length - 1) {
                    colorArrayIndex = 0;
                }
                outputString += "\u001B[38;5;".concat(colorArray[colorArrayIndex], "m").concat(inputArray[i]);
            }
        }
        outputString += '\x1B[0m';
        return outputString;
    };
    Coco.formatStringForWindows = function (input) {
        var _c, _d;
        if (typeof input === 'object') {
            input = JSON.stringify(input, null, 2);
        }
        var backupGraident = _a.gradient;
        if (input.length == 0) {
            return input;
        }
        else if (input.length < 3) {
            var output = '';
            for (var i = 0; i < input.length; i++) {
                var stops = tinygradient(_a.gradient.windowsGradient).stops;
                var _e = stops[i].color, _r = _e._r, _g = _e._g, _b = _e._b;
                output += "\u001B[38;2;".concat(Math.round(_r), ";").concat(Math.round(_g), ";").concat(Math.round(_b), "m").concat(input[i]);
            }
            output += '\x1b[0m';
            return output;
        }
        else {
            if (input.length <
                tinygradient((_c = _a.gradient) === null || _c === void 0 ? void 0 : _c.windowsGradient).stops.length) {
                var stops = tinygradient((_d = _a.gradient) === null || _d === void 0 ? void 0 : _d.windowsGradient).stops.slice(0, input.length - 1);
                _a.gradient.windowsGradient = stops;
            }
            var colorArray = tinygradient(_a.gradient.windowsGradient).rgb(input.length);
            var output = '';
            for (var i = 0; i < input.length; i++) {
                // @ts-ignore
                var _f = colorArray[i], _r = _f._r, _g = _f._g, _b = _f._b;
                output += "\u001B[38;2;".concat(Math.round(_r), ";").concat(Math.round(_g), ";").concat(Math.round(_b), "m").concat(input[i]);
            }
            output += '\x1B[0m';
            _a.gradient = backupGraident;
            return output;
        }
    };
    Coco.prototype.buffer = function () {
        var holder = '■▣'.repeat(50);
        _a.formatStringForWindows(holder);
    };
    var _a;
    _a = Coco;
    Coco.softRainbowDefault = {
        name: 'softrainbow',
        windowsGradient: [
            '#c1153d',
            '#dd901c',
            '#efe52d',
            '#5eef2d',
            '#2750f4',
            '#2914e5',
        ],
        macGradient: [196, 214, 226, 118, 123, 213],
    };
    Coco.gradientShorthands = [
        {
            name: 'purplehaze',
            windowsGradient: ['#9900ff', '#cc99ff'],
            macGradient: [93, 92, 91, 99, 98, 97],
        },
        {
            name: 'vaporwave',
            windowsGradient: ['#0000ff', '#ff3399', '#00ffcc'],
            macGradient: [93, 99, 105, 111, 117, 159, 158, 153],
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
            macGradient: [160, 124, 125, 130, 94, 178],
        },
        _a.softRainbowDefault,
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
    Coco.gradient = _a.softRainbowDefault;
    Coco.lorenLipsumString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    Coco.red = function (value) {
        var currentGradient = _a.gradient;
        _a.setColor('red');
        _a.log(value);
        _a.setColor(currentGradient.name);
    };
    Coco.orange = function (value) {
        var currentGradient = _a.gradient;
        _a.setColor('orange');
        _a.log(value);
        _a.setColor(currentGradient.name);
    };
    Coco.yellow = function (value) {
        var currentGradient = _a.gradient;
        _a.setColor('yellow');
        _a.log(value);
        _a.setColor(currentGradient.name);
    };
    Coco.green = function (value) {
        var currentGradient = _a.gradient;
        _a.setColor('green');
        _a.log(value);
        _a.setColor(currentGradient.name);
    };
    Coco.blue = function (value) {
        var currentGradient = _a.gradient;
        _a.setColor('blue');
        _a.log(value);
        _a.setColor(currentGradient.name);
    };
    Coco.purple = function (value) {
        var currentGradient = _a.gradient;
        _a.setColor('purple');
        _a.log(value);
        _a.setColor(currentGradient.name);
    };
    Coco.white = function (value) {
        var currentGradient = _a.gradient;
        _a.setColor('white');
        _a.log(value);
        _a.setColor(currentGradient.name);
    };
    Coco.consoleRedOrGreen = function (value) {
        var str = value.replace('!', '').replace('!', '') + '';
        if (eval(value)) {
            console.log('\x1b[0;32m', str + ' => ' + eval(value));
        }
        else {
            console.log('\x1b[0;31m', str + ' => ' + eval(value));
        }
    };
    Coco.start = function () {
        console.log('');
        _a.log('■▣'.repeat(50));
        _a.log('■▣'.repeat(21) + ' Starting up~ ' + '■▣'.repeat(22));
        _a.log('■▣'.repeat(50));
        console.log('');
    };
    Coco.end = function () {
        console.log('');
        _a.log('■▣'.repeat(50));
        _a.log('■▣'.repeat(21) + ' End of program ' + '■▣'.repeat(21));
        _a.log('■▣'.repeat(50));
        console.log('');
    };
    Coco.testForCharacterLengths = function () {
        _a.start();
        _a.log('a');
        _a.log('aa');
        _a.log('aaa');
        _a.log('aaaa');
        _a.log('aaaaa');
        _a.log('aaaaaaaaaa');
        _a.log(_a.lorenLipsumString);
        _a.end();
    };
    Coco.debug = function () {
        _a.red('RED TEXT');
        _a.red('A');
        _a.red('AA');
        _a.red('AAA');
        _a.orange('ORANGE TEXT');
        _a.yellow('YELLOW TEXT');
        _a.green('GREEN TEXT');
        _a.blue('BLUE TEXT');
        _a.purple('PURPLE TEXT');
        _a.white('WHITE TEXT');
        _a.testForCharacterLengths();
        _a.setColor('purplehaze');
        _a.testForCharacterLengths();
        _a.setColor('vaporwave');
        _a.testForCharacterLengths();
        _a.setColor('oldmovie');
        _a.testForCharacterLengths();
        _a.setColor('firewood');
        _a.testForCharacterLengths();
    };
    return Coco;
}());
exports.Coco = Coco;
//Coco.debug();
