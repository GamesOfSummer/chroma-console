# Chroma Console, aka 'Coco'

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Rainbow font, with one import.** No configuration needed, just works for terminal or Google Chrome.

![alt text](https://github.com/GamesOfSummer/chroma-console/blob/main/Preview.gif?raw=true)

```
import { Coco } from 'chroma-console';

(...)

Coco.log('testing debug output');
```

![alt text](https://github.com/GamesOfSummer/chroma-console/blob/main/TestingOutput.png?raw=true)

Big colorful buffers incase you need a visual blurb somewhere...

```
import { Coco } from 'chroma-console';

(...)

Coco.start();
Coco.end();
```

![alt text](https://github.com/GamesOfSummer/chroma-console/blob/main/TestingOutput2.png?raw=true)

PS, because Mac terminals don't include working with TrueColor, the output will be a bit different
![alt text](https://github.com/GamesOfSummer/chroma-console/blob/main/macPreview.gif?raw=true)

### Other Helpers

If you just want to set the text to a color, use these helpers. The next time CoCo outputs a 'log', it will use the default color.

```
Coco.red('RED TEXT');
Coco.orange('ORANGE TEXT');
Coco.yellow('YELLOW TEXT');
Coco.green('GREEN TEXT');
Coco.blue('BLUE TEXT');
Coco.purple('PURPLE TEXT');
Coco.white('WHITE TEXT');
```

If you don't like the rainbow, you can set the color to something else!

```

Coco.setColor('oldmovie');
Coco.setColor('vaporwave');
Coco.setColor('purplehaze');
Coco.setColor('firewood');

```

### Other Other

Uses [🔗 gradient-string](https://github.com/bokub/gradient-string)

Please note if you want more options, please check out [🔗 Chalk](https://github.com/chalk/chalk),[🔗 Chalk Animation](https://github.com/bokub/chalk-animation), or[🔗colorfy](https://github.com/kippisone/colorfy)

NPM Package Link - https://www.npmjs.com/package/chroma-console

### TODO -

-   typescript types
-   research a better way to global import, instead of importing on every script

```

```
