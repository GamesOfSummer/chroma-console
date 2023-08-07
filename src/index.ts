//@ts-ignore
import tinygradient from 'tinygradient';


export class ChCo {
    static gradient: typeof tinygradient;
    static gradientStringBackUp : string = 'softrainbow';

    static loren :string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


    constructor(keyword?: string) {

        if(!!keyword)
        {
            ChCo.setColor(keyword);
            ChCo.gradientStringBackUp = keyword;
        }
        else
        {
            ChCo.gradient = tinygradient(ChCo.gradientShorthands.softrainbow);
            ChCo.gradientStringBackUp = 'softrainbow';
        } 
    }

    static getGradient(keyword:string)
    {
        const gradient = Object.fromEntries(
            Object.entries(ChCo.gradientShorthands).filter(([key]) =>
                key.includes(keyword)
            )
        );

        const holder = Object.values(gradient);
        return tinygradient(holder[0]);
    }

    //todo - make this better
    static setColor(keyword:string)
    {
        if (keyword) {
            ChCo.gradient = this.getGradient(keyword);
        } else {
            ChCo.gradient = tinygradient(ChCo.gradientShorthands.softrainbow);
        }
    }

    static log(inputString: string) {
        console.log('\x1b[0m', this.formatString(inputString));
    }

    buffer() {
        const holder = '■▣'.repeat(50);
        console.log('\x1b[0m', ChCo.formatString(holder));
    }

    static formatString(input: string) {
       
        const backupGraident = ChCo.gradient;
         if (input.length < ChCo.gradient.stops.length) {

            let holder = this.getGradient(this.gradientStringBackUp);
            var holder2 = holder.stops.slice(0, input.length - 1);
            
            ChCo.gradient = tinygradient(holder2); 
        } 
  



            var colorArray = ChCo.gradient.rgb(input.length);

            let output = '';

            for (let i = 0; i < input.length; i++) {
                var { _r, _g, _b } = colorArray[i];
                output += `\x1b[38;2;${Math.round(_r)};${Math.round(
                    _g
                )};${Math.round(_b)}m${input[i]}`;
            }
            output += '\x1b[0m';


            ChCo.gradient = backupGraident;




            return output;        
    }

    consoleRed = (value: string) => {
        console.log('\x1b[0;31m', value);
    };

    consoleOrange = (value: string) => {
        console.log('\x1b[38;2;255;100;0m', value);
    };

    consoleYellow = (value: string) => {
        console.log('\x1b[0;33m', value);
    };

    consoleGreen = (value: string) => {
        console.log('\x1b[0;32m', value);
    };

    consoleBlue = (value: string) => {
        console.log('\x1b[0;36m', value);
    };

    consolePurple = (value: string) => {
        console.log('\x1b[38;2;179;124;255m', value);
    };

    consoleWhite = (value: string) => {
        console.log('\x1b[0m', value);
    };

    consoleRedOrGreen = (value: any) => {
        let str = value.replace('!', '').replace('!', '') + '';

        if (eval(value)) {
            console.log('\x1b[0;32m', str + ' => ' + eval(value));
        } else {
            console.log('\x1b[0;31m', str + ' => ' + eval(value));
        }
    };

    static start = () => {
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
        console.log(
            '\x1b[0m',
            ChCo.formatString(
                '■▣'.repeat(21) + ' Starting up ' + '■▣'.repeat(22)
            )
        );

        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
        console.log('');
    };

    static end = () => {
        console.log('');
        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
        console.log(
            '\x1b[0m',
            ChCo.formatString(
                '■▣'.repeat(21) + ' End of program ' + '■▣'.repeat(22)
            )
        );

        console.log('\x1b[0m', ChCo.formatString('■▣'.repeat(50)));
    };

    static debug = () =>
    {
        ChCo.start();
        ChCo.log(ChCo.loren);
        ChCo.end();
    }

    static gradientShorthands = {
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
}



function test(): void {
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


function test2(): void {
   
    
    ChCo.setColor('firewood');

    ChCo.log('aaa');
    ChCo.log('aaaaaaaaaaaa');
    ChCo.debug();
    ChCo.log('a');

}

test2();



