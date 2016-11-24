# workplus-escape [![npm](https://img.shields.io/npm/v/workplus-escape.svg?maxAge=2592000?style=flat-square)]()

>Toggle escape string and object for use in HTML. 

## Install

```bash
npm install --save workplus-escape
```

## Usage

```js
import { 
    escapeString,
    unescapeString,
    escapeObject,
    unescapeObject 
} from 'workplus-query-string';

const str = escapeString('<h1></h1>"');
// str => '&lt;h1&gt;&lt;/h1&gt;&quot;'

const rts = unescapeString('&lt;h2&gt;&lt;/h2&gt;');
// rts => '<h2></h2>'

let someObject = {
    a: '<h1></h1>',
    b: "'",
    c: {
        x: '""'
    }
};
let obj = escapeObject(someObject);
// obj.a => '&lt;h1&gt;&lt;/h1&gt;'
// ibj.b => '&#39;'
// obj.c.x => '&quot;&quot;'

let jbo = unescapeObject(obj);
// jbo.a => '<h1></h1>'

```

[Why not use "&amp;apos;"](https://blogs.msdn.microsoft.com/kirillosenkov/2010/03/19/apos-is-in-xml-in-html-use-39/)

## Development

```bash
git clone https://github.com/WorkPlusFE/workplus-escape.git

npm install

npm test
```

## License

MIT