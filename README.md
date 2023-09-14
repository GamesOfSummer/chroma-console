# Chroma Console, aka 'Coco'

[![Build Status](https://app.travis-ci.com/GamesOfSummer/chroma-console.svg?branch=main)](https://app.travis-ci.com/GamesOfSummer/chroma-console)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Rainbow font, with one import.** No configuration needed, just works for terminal or Google Chrome.

```
import { Coco } from 'chroma-console';

(...)

Coco.log('testing debug output');
```

![Screenshot.](TestingOutput.png)

Big colorful buffers incase you need a visual blurb somewhere...

```
import { Coco } from 'chroma-console';

(...)

Coco.start();
Coco.end();
```

![Screenshot.](TestingOutput2.png)

Uses [🔗 gradient-string](https://github.com/bokub/gradient-string)

Please note if you want more options, please check out [🔗 Chalk](https://github.com/chalk/chalk),[🔗 Chalk Animation](https://github.com/bokub/chalk-animation), or[🔗colorfy](https://github.com/kippisone/colorfy)

NPM Package Link - https://www.npmjs.com/package/chroma-console

### TODO -

-   fix the unit tests
-   typescript types
-   if you set the color wrong, error out
-   github actions...? unit tests passing?
-   different colors (red, orange, yellow, etc) / unit tests for this
-   bool flag helper
