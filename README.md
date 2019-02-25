# @j0hnm4r5/easings

[![XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)

Yet another Easings library for JS (ES2015+).

## Getting Started

### Installation

`yarn add @j0hnm4r5/easings`

### Usage

Easings always takes a value from 0...1 and returns a number from 0...1 (except for `Elastic` — those numbers may return outside the range).

```js
import { Easings } from "easings";

Easings.easeInOut(7)(0.5); // generic easing funcions; the first number is the function order

Easings.easeInQuart(0.5); // everything else
```

## Inspirations

-   Example diagrams here: [https://easings.net/](https://easings.net/)
-   Based on the conversations here: [https://gist.github.com/gre/1650294](https://gist.github.com/gre/1650294)

## Authors

-   [John Mars](http://m4r5.io)

## License

MIT © John Mars
