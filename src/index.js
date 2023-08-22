"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChCo = void 0;
var tinygradient = require('tinygradient');
var ChCo = exports.ChCo = /** @class */ (function () {
    function ChCo() {
        this.consoleRed = function (value) {
            console.log('\x1b[0;31m', value);
        };
        this.consoleOrange = function (value) {
            console.log('\x1b[38;2;255;100;0m', value);
        };
        this.consoleYellow = function (value) {
            console.log('\x1b[0;33m', value);
        };
        this.consoleGreen = function (value) {
            console.log('\x1b[0;32m', value);
        };
        this.consoleBlue = function (value) {
            console.log('\x1b[0;36m', value);
        };
        this.consolePurple = function (value) {
            console.log('\x1b[38;2;179;124;255m', value);
        };
        this.consoleWhite = function (value) {
            console.log('\x1b[0m', value);
        };
        this.consoleRedOrGreen = function (value) {
            var str = value.replace('!', '').replace('!', '') + '';
            if (eval(value)) {
                console.log('\x1b[0;32m', str + ' => ' + eval(value));
            }
            else {
                console.log('\x1b[0;31m', str + ' => ' + eval(value));
            }
        };
    }
    ChCo.isBrowser = function () {
        try {
            if (window === undefined || !window) {
                return false;
            }
            return !!window;
        }
        catch (_a) {
            return false;
        }
    };
    ChCo.getGradient = function (keyword) {
        if (!keyword) {
            return tinygradient(this.gradientShorthands.softrainbow);
        }
        var gradient = Object.fromEntries(Object.entries(ChCo.gradientShorthands).filter(function (_a) {
            var key = _a[0];
            return key.includes(keyword);
        }));
        var holder = Object.values(gradient);
        return tinygradient(holder[0]);
    };
    ChCo.setColor = function (keyword) {
        if (keyword) {
            ChCo.gradient = this.getGradient(keyword);
        }
        else {
            ChCo.gradient = tinygradient(ChCo.gradientShorthands.softrainbow);
        }
    };
    ChCo.log = function (inputString) {
        if (ChCo.isBrowser()) {
            console.log(this.formatString(inputString));
        }
        else {
            console.log('\x1B[0m', this.formatString(inputString));
        }
    };
    ChCo.logb = function (inputString) {
        console.log(this.formatString(inputString));
    };
    ChCo.prototype.buffer = function () {
        var holder = '■▣'.repeat(50);
        console.log('\x1b[0m', ChCo.formatString(holder));
    };
    ChCo.formatString = function (input) {
        var _a, _c;
        var backupGraident = ChCo.gradient;
        if (input.length == 0) {
            return input;
        }
        else if (input.length < 3) {
            var editedGradient = ChCo.gradient.stops.slice(0, input.length);
            var output = '';
            for (var i = 0; i < input.length; i++) {
                // @ts-ignore
                var _r = (_a = editedGradient[i].color, _a._r), _g = _a._g, _b = _a._b;
                output += "\u001B[38;2;".concat(Math.round(_r), ";").concat(Math.round(_g), ";").concat(Math.round(_b), "m").concat(input[i]);
            }
            output += '\x1b[0m';
            return output;
        }
        else {
            if (input.length < ChCo.gradient.stops.length) {
                var holder2 = ChCo.gradient.stops.slice(0, input.length - 1);
                ChCo.gradient = tinygradient(holder2);
            }
            var colorArray = ChCo.gradient.rgb(input.length);
            var output = '';
            for (var i = 0; i < input.length; i++) {
                // @ts-ignore
                var _r = (_c = colorArray[i], _c._r), _g = _c._g, _b = _c._b;
                output += "\u001B[38;2;".concat(Math.round(_r), ";").concat(Math.round(_g), ";").concat(Math.round(_b), "m").concat(input[i]);
            }
            output += '\x1B[0m';
            ChCo.gradient = backupGraident;
            return output;
        }
    };
    ChCo.gradientShorthands = {
        purplehaze: ['#9900ff', '#cc99ff'],
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
    ChCo.gradient = tinygradient(ChCo.gradientShorthands.softrainbow);
    ChCo.loren = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    ChCo.start = function () {
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(21) + ' Starting up ' + '■▣'.repeat(22)));
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
        console.log('');
    };
    ChCo.end = function () {
        console.log('');
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(21) + ' End of program ' + '■▣'.repeat(22)));
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
    };
    ChCo.debug = function () {
        ChCo.start();
        ChCo.log('a');
        ChCo.log('aa');
        ChCo.log('aaa');
        ChCo.log('aaaa');
        ChCo.log('aaaaa');
        ChCo.log('aaaaaaaaaa');
        ChCo.log(ChCo.loren);
        ChCo.end();
    };
    ChCo.superDebug = function () {
        ChCo.debug();
        ChCo.setColor('purplehaze');
        ChCo.debug();
        ChCo.setColor('vaporwave');
        ChCo.debug();
        ChCo.setColor('oldmovie');
        ChCo.debug();
        ChCo.setColor('firewood');
        ChCo.debug();
    };
    ChCo.browserTest = function (input) {
        var _a;
        var colorArray = ChCo.gradient.rgb(input.length);
        var output = '';
        for (var i = 0; i < input.length; i++) {
            // @ts-ignore
            var _r = (_a = colorArray[i], _a._r), _g = _a._g, _b = _a._b;
            output += "\u001B[38;2;".concat(Math.round(_r), ";").concat(Math.round(_g), ";").concat(Math.round(_b), "m").concat(input[i]);
        }
        output += '\x1B[m';
        console.log(output);
        return output;
    };
    return ChCo;
}());
function test() {
    ChCo.log("Is browser : ".concat(ChCo.isBrowser()));
    ChCo.superDebug();
}
//test();
