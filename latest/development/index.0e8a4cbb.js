var test = "testing";
var testing = ()=>console.log(test);
var sayHello = ()=>console.log("hi");
const root = document.documentElement;
const docStyle = root.style;
function getRoot(element) {
    return element.documentElement.style;
}
function getVar(variableName) {
    return getComputedStyle(root).getPropertyValue(variableName);
}
function setVar(variableName, value) {
    return root.style.setProperty(variableName, value);
}
function addClass(element, classToAdd) {
    element.classList.add(classToAdd);
}
function removeClass(element, classToRemove) {
    element.classList.remove(classToRemove);
}
// HELPER FUNCTIONS
function $(arg, context = document) {
    const element = context.querySelector(arg);
    if (!element || !(element instanceof Element)) return null;
    element.listen = function(callback, listener = "click", capture = false) {
        element.addEventListener(listener, callback, capture);
        return element;
    };
    return element;
}
function $$(arg, element = document) {
    const array = Array.from(element.querySelectorAll(arg));
    return array;
}
function log() {
    console.log.apply(this, arguments);
}
function err() {
    console.log.apply(this, arguments);
}
function each(argList, callback) {
    return argList.map(callback);
}
function listenAll(elements, callback, listener = "click") {
    each(elements, (element)=>listen(element, callback, listener));
    return elements;
}
function listen(element = document, callback, listener = "click", capture = false) {
    console.log(arguments);
    element.addEventListener(listener, function(event) {
        callback.apply(callback, [
            event,
            ...arguments,
            element
        ]);
    }, capture);
}
async function httpPost(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const result = await response.json();
        return result;
    }
    console.log("resonse not ok", response);
}
async function httpGet(url = "") {
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
        return result;
    }
}
function responseOk(response) {
    return response.status === 200 && response.statusText === "OK";
}
function createToggleList(elements, classList = [
    "active"
]) {
    function toggle(element) {
        elements.forEach((element)=>element.classList.remove(...classList));
        element.classList.add(...classList);
    }
    elements.forEach((element)=>element.addEventListener("click", toggle.bind(this, element)));
    return {
        classList,
        elements: [
            ...elements
        ],
        toggle,
        add: function(element) {
            this.elements.push(element);
        }
    };
}
function nextTick(fn) {
    setTimeout(fn, 0);
}
function toDecimal(num) {
    return num / 100;
}
function focusInput(input, value) {
    console.log(input, value);
    if (value) input.value = value;
    input.select();
    return input;
}
function logInput(input) {
    console.log(input);
    // const {key} = e;
    return function() {
        nameChange = input.value;
        console.log(nameChange);
    };
}
function trapInput(e1, cb) {
    const { key  } = e1;
    if (key === "Enter" && (nameChange !== "" || nameChange !== undefined)) cb();
// if (key === 'Backspace' && $('.inp input').value === $('.color-content .color-title .label').textContent)
//     $('.inp input').value = '';
}
function submitInput(input, cb) {
    // update in db ?    
    updateTitles(nameChange);
    $(".color-content .color-title").classList.remove("active");
    cb();
    input.blur();
}
function followMouseFromEventTarget(event) {
    const { currentTarget: target  } = event;
    const rect = target.getBoundingClientRect(), mouseXFromTarget = e.clientX - rect.left, mouseYFromTarget = e.clientY - rect.top;
    return {
        x: mouseXFromTarget,
        y: mouseYFromTarget,
        mouseX: e.clientX,
        mouseY: e.clientY
    };
}
function followMouseFromCoords(coords) {
    return function(event) {
        const { clientX , clientY  } = event;
        const { x , y  } = coords;
        return {
            x: clientX - x,
            y: clientY - y,
            mouseX: clientX,
            mouseY: clientY
        };
    };
}
function createToggleList(elements, classList = [
    "active"
]) {
    // console.log('creating a toggle list with elements',elements,'toggling between the class(s)',classList)
    function toggle(element) {
        elements.forEach((element)=>element.classList.remove(...classList));
        element.classList.add(...classList);
    }
    elements.forEach((element)=>{
        // console.log(element)
        element.addEventListener("click", toggle);
    });
    return {
        classList,
        elements: [
            ...elements
        ],
        toggle,
        add: function(element) {
            this.elements.push(element);
        }
    };
}
function tag(elementName, props, ...children) {
    const result = document.createElement(name);
    if (props.classList) result.classList.add(...props.classList);
    for(const attr in props.attributes)result.setAttribute(attr, props.attributes[attr]);
    for (const child of children)result.appendChild(child);
    return result;
}
function frag() {
    return document.createDocumentFragment();
}
// function div(classList = [], props = {}) {
//     const div = document.createElement('div');
//     if (classList in props)
//         div.classList.add(...props[classList]);
//     if (styles in props)
//         for (property in props[styles]) 
//             div.style[property] = props.styles[property];
//     if (attributes in props)
//         for (attribute in props[attributes]) 
//             div.setAttribute(attribute,attributes[attribute])
//     if (children in props) 
//         props[children].forEach(div.appendChild)
//     if (text in props)
//         div.textContent = props[text]
//     return div;
// }
function div(classList = [], styleProps = {}, attrs = {}, children) {
    const div = document.createElement("div");
    if (classList) div.classList.add(...classList);
    if (styleProps) for(prop in styleProps){
        console.log(prop);
        console.log(styleProps[prop]);
        div.style[prop] = styleProps[prop];
    }
    if (children) children.forEach(div.appendChild);
    return div;
}
function ul() {
    return document.createElement("ul");
}
function li() {
    return document.createElement("li");
}
function span() {
    return document.createElement("span");
}
function input() {
    return document.createElement("input");
}
function appendElement(parent, child) {
    parent.append(child);
}
function wipeElement(element) {
    element.innerHTML = "";
    return element;
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
function toUpper(str) {
    return [
        ...str
    ].map((x)=>x = x.toUpperCase()).join("");
}
function lowercase(str) {
    return [
        ...str
    ].map((x)=>x = x.toLowerCase()).join("");
}
function exclaim(str) {
    return str + "!";
}
function first(value) {
    return value[0];
}
function last(value) {
    return value[value.length - 1];
}
function clearField(input) {
    input.value = "";
    return input;
}
function clearForm(form) {
    $$("input", form).map(clearField);
    return form;
}
function focusInputOnClick(event, placholder) {
    let input = event.target;
    if (input.nodeName !== "INPUT") return;
    if (placholder && typeof placholder == "string") input.value = placholder;
    // console.log(placholder)
    input.select();
    return input;
}
function verifyInput(input) {}
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}
function mouseClickRight(event) {
    return event.button === 2;
}
function mouseClickLeft(event) {
    return event.button === 0;
}
function elementClicked(elementClass, event) {
    return event.target.closest(elementClass);
}
function toClipboard(value, message) {
    window.navigator.clipboard.writeText(value);
    if (message) alert(message);
}
function mergeObj(targetObj, mergingObj) {
    return {
        ...structuredClone(targetObj),
        ...structuredClone(mergingObj)
    };
}
// -------------------------
// PROJECT SPECIFIC FUNCTIONS
// -----------------------------------------
function addToCollection_ROUTE(collectionName) {
    return async function(name1, hex) {
        const response = await axios.post(`http://localhost:1279/colors/add/${collectionName}`, {
            name: name1,
            hex
        });
        return response;
    };
}
function copyCurrentHex() {
    if (appState.color) window.navigator.clipboard.writeText(appState.color.hex);
    else console.warn("no current color");
    // return appState.color.hex;
    alert("current color copied", appState.color.hex);
}
function copyCurrentRgb() {}
function copyCurrentHsl() {}
function colorClicked(event) {
    return elementClicked(".view-panel--clr", event);
}
function handleNameChange() {
    console.log("handling name");
    const input = $(".inp input");
    const label = $(".color-content .color-title .label");
    const name1 = label.textContent;
    input.value = "";
    $(".color-content .color-title").classList.add("active");
    focusInput(input, $(".color-content .color-title .label").textContent);
    document.addEventListener("keydown", trapInput);
    input.addEventListener("keyup", ()=>handleInput(input));
    input.addEventListener("focusout", ()=>{
        input.removeEventListener("keyup", handleInput);
        document.removeEventListener("keydown", trapInput);
        $(".color-content .color-title").classList.remove("active");
    });
}
function handleInput(input) {
    appState.nameChange = input.value;
    return input.value;
}
function trapInput(e1) {
    if (!appState.color) return;
    const name1 = appState.color.name;
    const { key  } = e1;
    if (key === "Enter" && (name1 !== "" || name1 !== undefined)) submitInput();
// if (key === 'Backspace' && $('.inp input').value === $('.color-content .color-title .label').textContent)
//     $('.inp input').value = '';
}
function submitInput() {
    // update in db ?
    if (appState.nameChange) appState.color.name = appState.nameChange;
    console.log("subiting name change", appState.nameChange);
    updateTitles(appState.color.name);
    $(".color-content .color-title").classList.remove("active");
    $(".inp input").blur();
    appState.nameChange = "";
}
function updateTitles(ttl) {
    $$(".color-title .label").forEach((el)=>el.textContent = ttl);
// if (colorPreview && colorPreview.currentColor.name !== ttl)
//     colorPreview.currentColor.name = ttl;
}
function updateHexCodes(hex) {
    $$(".color-hex .label").forEach((el)=>el.textContent = hex);
    root.style.setProperty("--currentHex", hex);
}
function isFavorite(color) {
    return color.dataset.isFavorite === "true";
}
function highlightFavoriteIcon() {
    document.querySelector(".btn.like").classList.add("isFav");
    document.querySelector(".btn.favit").classList.add("isFav");
}
function hideFavoriteIcon() {
    document.querySelector(".btn.like").classList.remove("isFav");
    document.querySelector(".btn.favit").classList.remove("isFav");
}
function updateColorTone(tone) {
    $$(".color-tone .label").forEach((label)=>label.textContent = tone);
}

//# sourceMappingURL=index.0e8a4cbb.js.map
