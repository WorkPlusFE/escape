import test from 'ava';
import {
    escapeString,
    unescapeString,
    escapeObject,
    unescapeObject
} from '../lib/workplus-escape.js';

test('Escape the string correctly', t => {
    const str1 = '<h1></h1>"';
    t.is('&lt;h1&gt;&lt;/h1&gt;&quot;', escapeString(str1));
    const str2 = "'";
    t.is('&#39;', escapeString(str2))
    t.pass();
});

test('Unescape the string correctly', t => {
    const str = '&lt;h1&gt;&lt;/h1&gt;&quot;';
    t.is('<h1></h1>"', unescapeString(str))
    t.pass();
});

test('Escape the obect correctly', t => {
    let obj = {
        a: '<h1></h1>',
        b: "'",
        c: {
            x: '""'
        }
    };
    let objAfter = escapeObject(obj);
    t.is('&lt;h1&gt;&lt;/h1&gt;', objAfter.a);
    t.is('&#39;', objAfter.b);
    t.is('&quot;&quot;', objAfter.c.x);
    t.pass();
});


test('Unescape the obect correctly', t => {
    let obj = {
        a: '&lt;h1&gt;&lt;/h1&gt;&quot;',
        b: {
            x: {
                y: '&quot;'
            }
        },
        c: [1, '&quot;', {e: '&quot;', f: null}]
    };
    let objAfter = unescapeObject(obj);
    t.is('<h1></h1>"', objAfter.a);
    t.is('"', objAfter.b.x.y);
    t.is('"', objAfter.c[1]);
    t.is('"', objAfter.c[2].e);
    t.pass();
});