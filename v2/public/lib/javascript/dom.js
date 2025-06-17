import * as R from 'ramda'

export {R};

export var $ = (arg,element = document) => element.querySelector(arg);
export var $$ = (arg,element = document) => Array.from(element.querySelectorAll(arg));
export var log = (...args) => console.log.apply(this,args);
export var err = (...args) => console.log.call(this,args);
export var each = (argList,callback) => argList.forEach(arg => callback(arg))

export var curry = R.curry;
export var is = R.is;

export const frag = () => document.createDocumentFragment();
export const div = () => document.createElement('div');
export const ul = () => document.createElement('ul');

export const append = curry((parent,child) => parent.append(child));
export const appendChild = curry((parent,child) => parent.appendChild(child))

export const clearField = inp => inp.value = "";
export const clearForm = form => $$("input",form).forEach(clearField);

export const capitalize = word => word[0].toUpperCase() + word.slice(1);
export const toUpper = str =>str.toUpperCase();
export const exclaim = str => str + '!';
export const first = xs => xs[0];
export const last = xs => xs[xs.length - 1];

export const split = curry((delimeter,string) => string.split(delimeter)); 
export const splitWords = split(' ');
export const replaceString = curry((regex, replacement, str) => str.replace(regex, replacement));
export const replaceVowels = w => replaceString(/[AEIOU]/ig,w)
export const concat = curry((y,x) => x + y);


export function createBus(...fns) {
    return {
        tl: [...fns],
        add: function (fn) {
            this.tl.push(fn);
        },
        run: function (data) {
            fns.forEach(fn => fn(data))
        }
    }
}

export function listenAll( elements , callback , listener = 'click') {
    return elements.forEach(element => element.addEventListener(listener, callback));
}

export function listen( element , callback , listener = 'click') {
    return element.addEventListener(callback,listener);
}

export function createToggleList(  elements , classList = ['active']  ) {

    function toggle(element) {
        elements.forEach(element => element.classList.remove(...classList))
        element.classList.add(...classList);
    }

    elements.forEach(element => element.addEventListener('click', toggle.bind(this,element)));

    return {
        classList,
        elements: [...elements],
        toggle,
        add: function(element) {
            this.elements.push(element);
        }
    }
}

export function getCoords(element) {
    return element.getBoundingClientRect();
}

export function mouseFromTarget(event) {

    const { currentTarget: target } = event;

    const rect = target.getBoundingClientRect(), 
        mouseXFromTarget = event.clientX - rect.left,
        mouseYFromTarget = event.clientY - rect.top;

    return {
        x: mouseXFromTarget,
        y: mouseYFromTarget,
        mouseX: event.clientX,
        mouseY: event.clientY,
    }
}

export function mouseFromCoords(coords) {

    return function(event) {

        const { clientX , clientY } = event; 
        const { x, y } = coords;

        return {
            x: clientX - x,
            y: clientY - y,
        }

    }
}

export function mouseX(event) {

    if (event.pageX)
      return event.pageX;

    if (event.clientX) 
      return event.clientX + ( document.documentElement.scrollLeft 
                ? document.documentElement.scrollLeft 
                : document.body.scrollLeft
                ? event.clientX
                : undefined )
            
      return
    
}
  
export function mouseY(event) {

    if (event.pageY)
      return event.pageY;

    if (event.clientY)
      return event.clientY + (document.documentElement.scrollTop 
                ? document.documentElement.scrollTop 
                : document.body.scrollTop
                ? event.clientX
                : undefined );
    
    return

}

export const filter = curry((f, xs) => xs.filter(f));

export const isNum = value => is(Number,value) && value !== NaN;
export const isArray = value => is(Array, value);
export const isObj = value => is(Object, value);

export const add = curry((x,y) => x + y);
export const subtract = curry((x,y) => y - x);
export const multiply = curry((x,y) => x * y);

export const incer = add(1);
export const decer = subtract(1);

export const modulo = curry((x,y) => y % x);

export const isOdd = modulo(2);
export const isEven = num => !isOdd(num);

export const getOdds = filter(isOdd);
export const getEvents = filter(isEven)

export const sumTotal = (array) => array.reduce(add);

export function getRandomIndex(arr) {
    return Math.floor( Math.random() * arr.length );
}

export function uuid() {
    let timmy = Date.now().toString(36).toLocaleLowerCase();
    // random high number
    let randy = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
    // random high num to hex => "005EIPQUTQ64" => add 0s to make sure its 12digits
    randy = randy.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
    // coerce into a string
    return ''.concat(timmy, '-', randy);
}

export function ordinal(num) {
    if (!isNaN(num)) {
        let n = num;
        let teensPlace = Number( num.toString().slice(-2) );
        let suff;
        let string = num.toString();
        let lastNum = Number(last(string));

        if (teensPlace < 20 && teensPlace >= 10)
            return string + 'th';

        if (num > 20)
            // grab the last digit
            n = Number(last(string));
        
          lastNum == 1 ? suff = 'st'
        : lastNum == 2 ? suff = 'nd'
        : lastNum == 3 ? suff = 'rd'
        : suff = 'th';

        return string + suff;
    }
}

export function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

export function midpoint() {
    return (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2;
}

export function unless(test, then) {
    if (!test) then();
}

export function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
}

export function greaterThan(n) {
    return m => m > n;
}

export function repeatLog(n) {
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
}

export function every(cond, array) {
    let result = true;
    for (index of array) {
        if (!cond(index)) {
            result = false;
        }
    }
    return result;
}

export async function httpPost(url = "", data = {}) {

    const response = await fetch( url ,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

    if (response.ok) {
        const result = await response.json();
        return result
    }
    console.log('resonse not ok' ,response)
}

// always returns response.json()
export async function httpGet(url = "") {

    const response = await fetch(url);
    
    if (response.ok) {
        const result = await response.json();
        return result
    }
}

export function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "`": '&grave;',
        '`': '&#x60;',
        '=': '&#x3D;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
}

// export const match = regex => str => str.match(regex)
// export const strCheck = (success,err) => str => match(str) ? success(str) : err(str)

export function checkSTR(string) {
if(string.match(/^[0-9a-zA-Z]{1,16}$/)){
    //The id is fine
}
else{
    //The id is illegal
}
}

export function escapeHtml (string) {
return String(string).replace(/[&<>"'`=\/]/g, function (s) {
  return entityMap[s];
})
}

