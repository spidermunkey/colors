// -------------------------
// STRUCTS
// -----------------------------------------
class Cursor {
    // Allows extends a basic array allowing easy access to the next and previous elements in a list 
    // according to a pointer in memory
    // EXPECTS INDEXES TO START FROM 1 INSTEAD OF ZERO
    // INDEX OF 0 == "FIRST"
    // INDEX OF length-1 = "LAST"
    // expects callers to add one when using array indexes 
    constructor(array, startingIndex = 1){
        if (!Array.isArray(array)) throw new Error(`expecting an array you passed ${array}`);
        if (isNaN(startingIndex)) throw new Error(`expecting a number for startingIndex you passed ${startingIndex}`);
        let pointer;
        let items;
        if (startingIndex !== 0 && startingIndex < array.length - 1) this.pointer = startingIndex;
        if (array.length === 1 || array.length === 0) this.pointer = 1;
        this.items = [
            "first",
            ...array,
            "last"
        ];
    }
    get first() {
        return this.items[1];
    }
    get last() {
        return this.items[this.items.length - 2];
    }
    get next() {
        return this.items[this.pointer + 1];
    }
    get prev() {
        return this.items[this.pointer - 1];
    }
    get current() {
        return this.items[this.pointer];
    }
    get all() {
        return this.items.filter((index)=>index !== "first" && index !== "last");
    }
    get size() {
        return this.items.length - 2;
    }
    get isEmpty() {
        return this.size === 0;
    }
    validIndex(index) {
        if (isNaN(index)) return NaN;
        // console.log(`\nskip function was expecting a number... you passed ${index}`)
        if (index > this.size || index < 0) return undefined;
        // console.log(`\nuh oh....index of ${index} doesn\'t exist\ntry a number from 0 to ${this.size}\n`);
        return true;
    }
    setPointer(index) {
        if (!this.validIndex(index)) return;
        this.pointer = index;
        return this.items[index];
    }
    skipToIndex(index) {
        if (!this.validIndex(index)) return;
        return this.setPointer(index);
    }
    getIndexOf(index) {
        if (!this.validIndex(index)) return;
        return this.items[index];
    }
    skipToNext() {
        if (this.next == "last") return this.setPointer(1);
        return this.setPointer(this.pointer + 1);
    }
    skipToPrev() {
        if (this.prev == "first") return this.setPointer(this.size);
        return this.setPointer(this.pointer - 1);
    }
    skipToLast() {
        return this.setPointer(this.size);
    }
    skipToFirst() {
        return this.setPointer(1);
    }
    pluck(index) {
        this.items = this.items.splice(index + 1, 1);
        return this;
    }
    addOne(element) {
        this.items.pop();
        this.items.push(element);
        this.items.push("last");
        return this;
    }
    addMany(elements) {
        this.items.pop();
        this.items.push(...elements);
        this.items.push("last");
        return this;
    }
    update(elements, startingIndex = 1) {
        this.pointer = startingIndex;
        this.items = [
            "first",
            ...elements,
            "last"
        ];
        return this;
    }
    nthSuffix(num) {
        if (!isNaN(num)) {
            let n = num;
            let suff;
            if (num > 20) {
                // convert to string
                let d = num.toString();
                // grab the last digit
                n = d[d.length - 1];
            }
            n == 1 ? suff = "st" : n == 2 ? suff = "nd" : n == 3 ? suff = "rd" : suff = "th";
            return num.toString() + suff;
        }
        return `this function expects numbers`;
    }
}
class Bucket {
    constructor(){
        this.items = new Map();
        this.identity = "bucket";
        this.idn = 0;
    }
    get size() {
        return this.items.size;
    }
    get keys() {
        return Array.from(this.items.keys());
    }
    get values() {
        return Array.from(this.items.values());
    }
    get copies() {
        return Array.from(this.items.values()).map(structuredClone);
    }
    push(key, value) {
        if (!key) return `item not pushed bucket... invalid key`;
        if (!value) return `item not pushed to bucket... invalid value`;
        if (this.items.has(key)) return `item not pushed to bucket... duplicate key`;
        this.items.set(key, value);
        return "success";
    }
    pluck(key) {
        return this.items.delete(key);
    }
    has(key) {
        return this.items.has(key);
    }
    use(key) {
        return this.items.get(key);
    }
    useValue(key) {
        return structuredClone(this.items.get(key));
    }
    spread(map) {
        let duplicates = this.compare(map);
        if (duplicates.length > 0) {
            console.error(`${duplicates.length} duplicates found in the keyset. No items were added`, duplicates);
            return duplicates;
        }
        map.forEach((value, key)=>this.push(key, value));
        return this;
    }
    compare(map) {
        return Array.from(map.keys()).filter(this.has);
    }
    wipe() {
        this.items = new Map();
    }
}
class Collection {
    constructor(){
        this.bucket = new Bucket();
        this.cursor = new Cursor([]);
        this.indexes = {};
    }
    get size() {
        return this.items.size;
    }
    get keys() {
        return this.bucket.keys;
    }
    get values() {
        return this.bucket.values;
    }
    get items() {
        return this.bucket.items;
    }
    use(key) {
        return this.bucket.use(key);
    }
    useValue(key) {
        return this.bucket.useValue(key);
    }
    add(key, value) {
        let status = this.bucket.push(key, value);
        if (status === "success") this.cursor.addOne(key);
        return status;
    }
    spread(map) {
        let status = this.bucket.spread(map);
        if (status) this.cursor.spread(Array.from(map.keys()));
        return status;
    }
    has(key) {
        return this.bucket.has(key);
    }
    remove(key) {
        let status = this.bucket.pluck(key);
        if (status) this.cursor.pluck(this.items.useKeys().indexOf(key));
    }
    drop() {
        this.items = new Bucket();
        this.cursor = new Cursor([]);
    }
}
// -------------------------
// OBSERVABLES
// -----------------------------------------
class Observer {
    constructor(target){
        this.Target = target;
        this.subscribers = new Set();
        this.priorities = new Set();
    }
    subscribe(...fns) {
        fns.forEach((fn)=>{
            if (this.Target) fn = fn.bind(this.Target);
            this.subscribers.add(fn);
        });
        return this;
    }
    unsubscribe(fn) {
        this.subscribers.delete(fn);
        return this;
    }
    prioritize(fn) {
        if (this.Target) fn = fn.bind(this.Target);
        this.priorities.add(fn);
    }
    unprioritize(fn) {
        this.priorities.delete(fn);
    }
    notify(...values) {
        for (const fn of this.priorities)fn(...values);
        for (const fn of this.subscribers)fn(...values);
    }
    get isEmpty() {
        return this.subscribers.size === 0;
    }
    get hasPriorities() {
        return this.priorities.size > 0;
    }
}
class Observable {
    constructor(target){
        this.observer = new Observer(target);
    }
    subscribe(...fns) {
        this.observer.subscribe(...fns);
        return this;
    }
    unsubscribe(fn) {
        this.observer.unsubscribe(fn);
        return this;
    }
    prioritize(fn) {
        this.observer.prioritize(fn);
        return this;
    }
    unprioritize(fn) {
        this.observer.unprioritize(fn);
        return this;
    }
    notify(...values) {
        this.observer.notify(...values);
        return this;
    }
    get isEmpty() {
        return this.observer.isEmpty;
    }
    get hasPriorities() {
        return this.observer.hasPriorities;
    }
    get listeners() {
        return this.observer.listeners;
    }
    get priorities() {
        return this.observer.priorities;
    }
    static create(target) {
        return new Observable(target);
    }
    static observe(obj) {
        if (obj != null) {
            Object.assign(obj, {
                subscribe: this.subscribe.bind(obj),
                unsubscribe: this.unsubscribe.bind(obj),
                prioritize: this.prioritize.bind(obj),
                unprioritize: this.unprioritize.bind(obj),
                notify: this.notify.bind(obj),
                subscribe: this.subscribe.bind(obj),
                get isEmpty () {
                    return this.observer.isEmpty;
                },
                get hasPriorities () {
                    return this.observer.hasPriorities;
                }
            });
            return obj;
        }
    }
}
class EventEmitter {
    constructor(events){
        this.events = events || new Map();
    }
    on(event, ...listeners) {
        if (!this.events.has(event)) this.events.set(event, new Observable());
        listeners.forEach((listener)=>{
            this.events.get(event).subscribe(listener);
        });
    }
    once(event, listener) {
        const singleton = (...args)=>{
            listener(...args);
            this.off(event, singleton);
        };
        this.on(event, singleton);
    }
    off(event, listener) {
        if (!this.events.has(event)) return;
        this.events.get(event).unsubscribe(listener);
    }
    clear(event) {
        if (this.events.has(event)) return;
        this.events.set(event, new Observable());
    }
    emit(event, ...args) {
        if (!this.events.has(event)) return;
        this.events.get(event).notify(...args);
    }
}
class Task {
    constructor(promiseFn1){
        this.state = undefined; // [undefined || pending || ready ]
        this.result = undefined;
        this.task = promiseFn1;
        this.emitter = new EventEmitter();
    }
    async run(...args) {
        try {
            this.state = "pending";
            this.emit("pending");
            this.result = await promiseFn.call(...args);
            this.state = "ready";
            this.emit("ready", this.result);
        } catch (error) {
            console.error(error);
            this.state = "error";
            this.result = error;
            this.emit("error", error);
        }
    }
    register(event, listener) {
        this.emitter.on(event, listener);
        return this;
    }
    remove(event, listener) {
        this.emitter.off(event, listener);
        return this;
    }
    emit(event, ...args) {
        this.emitter.emit(event, ...args);
        return this;
    }
}
// -------------------------
// COMPONENTS
// -----------------------------------------
class MenuList {
    constructor(listOfNames, classList, dataset){
        this.element = document.createElement("ul");
        this.element.classList.add(...classList);
        this.items = [];
        listOfNames.forEach((name)=>this.addItem(name));
    }
    get clone() {
        return this.element.cloneNode(true);
    }
    addItem(name) {
        const newLink = new MenuListItem(name);
        // console.log('adding menu item ',name, ' to ', this);
        this.element.append(newLink.element);
        this.items.push(newLink);
        return newLink;
    }
    render(container) {
        container.innerHTML = "";
        container.append(this.element);
    }
    append(container) {
        container.append(this.clone);
    }
    replaceItems(listOfNames) {
        this.innerHTML = "";
        this.items = [];
        listOfNames.forEach(this.addItem);
    }
    updateItem(element, callback) {
        this.items.forEach((MenuListItem)=>{
            if (MenuListItem.element == element) callback(MenuListItem);
        });
    }
    updateItemName(element, name) {
        this.items.forEach((MenuListItem)=>{
            if (MenuListItem.element == element) MenuListItem.name = name;
        });
    }
}
class MenuListItem {
    constructor(name, classNames = [], contentClassNames = []){
        this.name = name;
        this.element = document.createElement("li");
        this.content = document.createElement("span");
        this.element.append(this.content);
        this.element.classList.add(...classNames);
        this.content.classList.add(...contentClassNames);
        this.element.dataset.tab = name;
        this.content.textContent = name;
    }
    setName(newName) {
        this.content.textContent = newName;
        this.element.dataset.tab = newName;
        this.name = newName;
    }
}
class Modal {
    // basic modal class that handles open / close / toggle / methods
    // also hooks into the tabber interface to ensure only one modal of a group is open at once
    constructor(element, toggleClass = "active"){
        this.element = element;
        this.openTimeLine = Observable.create(this);
        this.closeTimeLine = Observable.create(this);
        this.togglers = new Set();
        this.openers = new Set();
        this.closers = new Set();
        this.status = "inactive";
        this.toggleClass = toggleClass || "active";
    }
    set state({ status , event  }) {
        // console.log(status,this.status)
        if (status == "inactive") this.close(event);
        else if (status == "active") this.open(event);
        else console.log("active and inactive are the only two states needed here", status);
    }
    get state() {
        return this.status;
    }
    // delegates sideEffects to the onOpen observer then changes the "status"
    open(e) {
        this.element.classList.add(this.toggleClass);
        if (!this.openTimeLine.isEmpty && this.state !== "active") this.openTimeLine.notify(e);
        this.status = "active";
    }
    // close modal
    // change [ status ]
    close(e) {
        this.element.classList.remove(this.toggleClass);
        if (!this.closeTimeLine.isEmpty && this.state !== "inactive") this.closeTimeLine.notify(e);
        this.status = "inactive";
    }
    // open - close modal
    // change status
    toggle(event) {
        if (this.state == "inactive") this.state = {
            status: "active",
            event
        };
        else if (this.state == "active") this.state = {
            status: "inactive",
            event
        };
        else console.log("err something went wrong with the modal toggler");
        return this;
    }
    // register DOM Element event listener that calls this toggle method
    bindToggler(...elements) {
        // console.dir('BINDING toggle element(s)', elements)
        elements.forEach((element)=>{
            if (this.togglers.has(element)) return `${element} is already bound as a toggler`;
            this.togglers.add(element);
            element.addEventListener("click", (e)=>this.toggle.call(this, e));
        });
        return this;
    }
    // register DOM Element event listener that calls this open method
    bindOpener(...elements) {
        elements.forEach((element)=>{
            // console.log(element)
            if (this.openers.has(element)) return `${element} is already bound as a opener`;
            this.openers.add(element);
            element.addEventListener("click", (e)=>this.open.call(this, e, true));
        });
        return this;
    }
    // register DOM Element event listener that calls this close method
    bindCloser(...elements) {
        elements.forEach((element)=>{
            // console.log(element)
            if (this.closers.has(element)) return `${element} is already bound as a closer`;
            this.closers.add(element);
            element.addEventListener("click", (e)=>this.close.call(this, e));
        });
        return this;
    }
    // registers a common Tab Interface between modals of a group 
    bindTabber(reference) {
        this.Tabber = reference;
        this.openTimeLine.prioritize(()=>this.Tabber.setActive(this));
        return this;
    }
    onOpen(...fns) {
        this.openTimeLine.subscribe(...fns);
        return this;
    }
    onClose(...fns) {
        this.closeTimeLine.subscribe(...fns);
        return this;
    }
}
class DynamicModal extends Modal {
    // adds functionality to handle a modals loader/suspense component
    // open/close observers will prioritize async fetching/showing data
    // comes with a render method that defines the static HTML as opposed to a basic modal with predefined HTML
    constructor(element, config = {
        type: "lazy",
        endpoint: undefined,
        dataHandler: undefined,
        requestHandler: undefined,
        responseHandler: undefined,
        hydrationHandler: undefined
    }){
        super(element);
        this.type = config.type || "lazy";
        this.endpoint = config.endpoint;
        this.suspense = `<div class="loading-container"><span class="loader"></span></div>`;
        this.errRes = `<div>Error Fetching Resources</div>`;
        this.handleData = config.dataHandler;
        this.handleRequest = config.requestHandler;
        this.handleResponse = config.responseHandler;
        this.handleHydration = config.hydrationHandler;
        this.ready = false;
        this.pending = false;
        this.hasChanged = false;
        this.initial = true;
        this.value = "";
        // super
        this.openTimeLine.prioritize(this.checkForUpdatesToRender.bind(this));
        if (config.type === "eager") this.update();
    }
    // set flags for next call to getData()
    setReady() {
        // console.log(`setting state to ready for ${this.element}`)
        this.pending = false;
        this.ready = true;
        if (this.initial) this.inital = false;
        return;
    }
    // set flags for next call to getData()
    setPending() {
        // console.log(`setting state to pending for ${this.element}`)
        this.pending = true;
        this.ready = false;
        return;
    }
    async update() {
        // console.log('triggering update')
        // set flags && result/value for getData to "bounce"
        this.value = this.suspense;
        this.setPending();
        this.renderSuspense();
        // call predefined request handler callback (DOM method) with suspense HTML string
        // if (handleRequest) handleRequest(this.suspense);
        // fetch resources from predefined endpoint
        // console.log(this.endpoint)
        const res = await axios.get(this.endpoint);
        // console.log(res.data)
        if (res) {
            // if res.ok call predifined request handler (DOM methods/tranformer) with the data and a flag
            // this.value = handleResponse('success', data)
            this.renderComponent(res.data);
            this.setReady();
        } else {
            // if !res.ok handle call response with an error flag 
            // this.value = handleResponse('error', data)
            this.renderError();
            this.setReady();
        }
        return this.value;
    }
    getData() {
        // if data is ready and hasn't changed || data is pending result will be an html string
        // return the html string
        if (this.ready && !this.hasChanged || this.pending) return this.value;
        // if not it means the data has changed or has never been fetched
        // so start the process of fetching data then return the loader
        this.update() // sets result to `<loading>` then returns a thenable
        ;
        return this.value;
    }
    notifyChange() {
        if (this.type === "lazy") {
            console.log("flagging change -- type lazy");
            this.hasChanged = true;
        }
        if (this.type === "eager") {
            console.log("flagging change -- type eager");
            this.update();
        }
    }
    checkForUpdatesToRender() {
        console.log("checking for updates");
        if (this.ready && !this.hasChanged || this.pending) {
            console.log("everything still checks out");
            return true;
        }
        if (this.hasChanged) {
            console.log("data has changed fetching changes");
            this.update();
            this.hasChanged = false;
            return false;
        } else if (this.initial) {
            console.log("rendering initial state");
            this.update();
            return false;
        }
    }
    renderSuspense() {
        this.element.innerHTML = this.suspense;
    }
    renderError() {
        this.element.innerHTML = this.errRes;
    }
    renderComponent(data) {
        this.element.innerHTML = this.handleData(data);
        if (this.handleHydration) // console.log('hydrating component')
        this.handleHydration(this.element);
    }
}
class Toggler {
    constructor(button, modal, state){
        this.state = state || "inactive";
        this.modal = modal;
        this.button = button;
    // button.addEventListener('click', this.toggle.bind(this))
    }
    enable() {
        this.modal.classList.add("active");
        this.button.classList.add("active");
        this.state = "active";
    }
    disable() {
        this.modal.classList.remove("active");
        this.button.classList.remove("active");
        this.state = "inactive";
    }
    toggle() {
        if (this.state === "active") {
            this.disable();
            return;
        }
        if (this.state === "inactive") {
            this.enable();
            return;
        }
    }
}
class Tabber {
    constructor(){
        this.current = undefined;
        this.previous = undefined;
    }
    setActive(value, event) {
        // console.log(value,this.current)
        if (this.current != value) {
            // console.log(this.current == value)
            if (this.current) this.current.close(event);
            this.previous = this.current;
            this.current = value;
        // console.log(value,this.current)
        }
    }
    closeActive(event) {
        if (this.current && this.current.state !== "inactive") this.current.close(event);
    }
}
class Slider {
    constructor(targetElement, actions = {}){
        const self = this;
        this.container = targetElement;
        this.track = targetElement.querySelector(".slider-track") || targetElement;
        this.handle = targetElement.querySelector(".slider-handle") || targetElement.querySelector(".slider-handle");
        console.log("container", targetElement, "container", this.container, "track", this.track);
        this.onMouseDown = actions.onMouseDown || function(state) {
            console.log("mouse down", state);
        };
        this.onMouseUp = actions.onMouseUp || function(state) {
            console.log("mouse up", state);
        };
        this.onMouseMove = function(...args) {
            requestAnimationFrame(actions.onMouseMove.bind(this, ...args));
        };
        this.coords = {
            get max () {
                return this.track.width - this.handleMidpoint;
            },
            get min () {
                return 0 + this.handleMidpoint;
            },
            get handleSize () {
                return this.handle.width;
            },
            get handleMidpoint () {
                return this.handleSize / 2;
            },
            get handlePosition () {
                return this.handle.x + this.handleMidpoint;
            },
            get distanceTraveled () {
                return this.handlePosition - this.trackStart;
            },
            get trackWidth () {
                return this.track.width - this.handleSize;
            },
            get trackStart () {
                return this.trackLeft + this.handleMidpoint;
            },
            get trackLeft () {
                return this.track.x;
            },
            get track () {
                return self.track.getBoundingClientRect();
            },
            get handle () {
                return self.handle.getBoundingClientRect();
            },
            clamp (val) {
                let x;
                let max = this.max;
                let min = this.min;
                if (isNaN(val)) throw new Error(`clamp function expects a number...you passed ${val}`);
                if (val >= max) x = max;
                else if (val <= min) x = min;
                else x = val;
                return x;
            }
        };
        this.MAX = {
            px: this.coords.track.width,
            pct: 100,
            deg: 360
        };
        this.MIN = {
            px: 0,
            pct: 0,
            deg: 0
        };
        this.state = {
            px: undefined,
            deg: undefined,
            pct: undefined
        };
        this.handle.addEventListener("mousedown", this.handleDrag.bind(this), true);
        this.track.addEventListener("click", this.handleClick.bind(this), true);
    }
    handleDrag(event) {
        event.stopImmediatePropagation();
        let initialMouseUpIfAny = document.onmouseup;
        let controller = new AbortController();
        let state;
        document.addEventListener("mousemove", update.bind(this), {
            capture: true,
            signal: controller.signal
        });
        document.onmouseup = abort.bind(this);
        function update(event) {
            state = this.update(event);
            this.onMouseMove(state);
        }
        function cleanup() {
            document.removeEventListener("mousemove", update.bind(this), {
                capture: true,
                signal: controller.signal
            });
            document.onmouseup = initialMouseUpIfAny;
        }
        function abort() {
            controller.abort();
            this.onMouseUp(state);
            nextTick(cleanup);
        }
    }
    handleClick(event) {
        if (event.target == this.handle) return;
        let state = this.update(event);
        this.onMouseDown(state);
        this.onMouseUp(state);
    }
    update(event) {
        this.state = this.setHandle(this.getDistanceTraveled(event));
        return this.state;
    }
    setHandle(distanceTraveled) {
        let clamped = this.coords.clamp(distanceTraveled);
        this.handle.style.transform = `translateX(${clamped - this.coords.handleMidpoint}px)`;
        if (distanceTraveled <= 0) return {
            px: 0,
            pct: 0,
            deg: 0
        };
        if (distanceTraveled >= this.coords.track.width) return {
            px: this.coords.track.width,
            pct: 100,
            deg: 360
        };
        let distance = Math.trunc(distanceTraveled);
        let distanceInPercent = Math.trunc(distanceTraveled / this.coords.track.width * 100);
        let distanceInDegrees = Math.trunc(distanceTraveled / this.coords.track.width * 360);
        let values = {
            px: distance,
            pct: distanceInPercent,
            deg: distanceInDegrees
        };
        return values;
    }
    reset() {
        return this.update(0);
    }
    disable() {
        this.handle.removeEventListener("mousedown", this.handleDrag.bind(this), true);
        this.track.removeEventListener("mousedown", this.handleClick.bind(this), true);
        return this.state;
    }
    getDistanceTraveled(event) {
        return event.clientX - this.coords.trackLeft;
    }
    convertValue(type1, value) {
        let max = this.coords.track.width;
        if (type1 === "pct") return max * (value / 100);
        if (type1 === "deg") return max * (value / 360);
        if (type1 === undefined) {
            console.warn("you passed an invalid type to the sliders conver function", type1, value);
            return undefined;
        }
        console.error("something went wrong in the convert value function", type1, value);
        return;
    }
    setFrom(type1, value) {
        this.state = this.setHandle(this.convertValue(type1, value));
        // console.log('state', state, 'slider state', this.state)
        return this.state;
    }
    setDegrees(value) {
        return this.setFrom("deg", value);
    }
    setPercent(value) {
        return this.setFrom("pct", value);
    }
    setPixels(value) {
        this.state = this.setHandle(value);
        return this.state;
    }
}
class MouseTrackingSlider {
    constructor(targetElement, actions = {}){
        this.initialPosition_x = null;
        this.initialPosition_y = null;
        this.targetElement = targetElement;
        this.onMouseMove = actions.onMouseMove || function() {
            console.log(targetElement, "triggering mouseMove");
        };
        this.onMouseDown = actions.onMouseDown || function() {
            console.log(targetElement, "triggered mouseDown");
        };
        this.onMouseUp = actions.onMouseUp || function() {
            console.log(targetElement, "triggered mouseUp");
        };
        targetElement.addEventListener("mousedown", this.track.bind(this), true);
        targetElement.addEventListener("click", this.handleClick.bind(this));
    }
    track(event) {
        if (event.button !== 0) return;
        if (!this.initialPosition_x) this.initialPosition_x = event.pageX;
        if (!this.initialPosition_y) this.initialPosition_y = event.pageY;
        let controller = new AbortController();
        document.addEventListener("mousemove", this.handleDrag.bind(this), {
            signal: controller.signal
        }, true);
        document.addEventListener("mouseup", ()=>{
            controller.abort();
            this.initialPosition_x = null;
            this.initialPosition_y = null;
            event.stopImmediatePropagation();
        });
    }
    handleDrag(event) {
        let distanceFromInitialPosition_x = event.clientX - this.initialPosition_x;
        let distanceFromInitialPosition_y = event.clientY - this.initialPosition_y;
        let debounced_x = Math.floor(distanceFromInitialPosition_x / 3);
        let debounced_y = Math.floor(distanceFromInitialPosition_y / 3);
        this.onMouseMove({
            x: Number(debounced_x),
            y: Number(debounced_y),
            event
        });
    }
    handleClick(event) {
        if (!this.initialPosition_x) this.initialPosition_x = event.pageX;
        if (!this.initialPosition_y) this.initialPosition_y = event.pageY;
        let x = event.clientX - this.initialPosition_x;
        let y = event.clientY - this.initialPosition_y;
        this.onMouseUp({
            x,
            y,
            event
        });
    }
}
// -------------------------
// DATE & TIME
// -----------------------------------------
class DateTime {
    constructor(){}
    static mns = 0.001;
    static snm = 1 / 60;
    static mnh = 1 / 60;
    static hnd = 1 / 24;
    static dny = 1 / 365;
    static mny = 1 / 12;
    static msns = 1000;
    static msnMinute = 60000;
    static msnHour = 3600000;
    static msnDay = 86400000;
    static msnYear = DateTime.msnDay * 365;
    // static thisYear() {
    //     let d = new Date()
    //     console.log(d.getFullYear())
    // }
    static date = {
        standard: undefined,
        default: undefined,
        universal: undefined,
        east: undefined,
        west: undefined,
        central: undefined,
        leap: DateTime.thisYearIsLeap(),
        dayMap: {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thurday",
            5: "Friday",
            6: "Saturday",
            7: null
        },
        get monthMap () {
            return {
                "January": 31,
                get "February" () {
                    if (DateTime.date.leap) return 29;
                    return 28;
                },
                "March": 31,
                "April": 30,
                "May": 31,
                "June": 30,
                "July": 31,
                "August": 31,
                "September": 30,
                "October": 31,
                "November": 30,
                "December": 31
            };
        },
        days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            null
        ],
        daysABRV: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            null
        ],
        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
            null
        ],
        monthsABRV: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Nov",
            "Dec",
            null
        ]
    };
    static now() {
        return new Date();
    }
    static stamp() {
        return {
            day: DateTime.today(),
            month: DateTime.thisMonth(),
            year: DateTime.thisYear(),
            date: DateTime.currentDate(),
            time: DateTime.currentTime(),
            isLeap: DateTime.thisYearIsLeap(),
            ms: Date.now()
        };
    }
    static today() {
        return DateTime.date.days[new Date().getDay()];
    }
    static currentTime() {
        return new Date().toLocaleTimeString();
    }
    static currentDate() {
        return new Date().getDate();
    }
    static thisMonth() {
        return DateTime.date.months[new Date().getMonth()];
    }
    static thisYear() {
        return new Date().getFullYear();
    }
    static thisYearIsLeap() {
        return DateTime.isLeap(DateTime.thisYear());
    }
    static isLeap(year) {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }
    static getLeaps(to, from) {
        function countFrom(lowest, highest) {
            let leapSince = 0;
            for(let i = lowest; i <= highest; i++)if (Datetdate.isLeap(i)) leapSince++;
            return leapSince;
        }
        return to < from ? countFrom(to, from) : countFrom(from, to);
    }
    static daysInMonth(month, year) {
        let days = date.monthMap[month];
        if (date.isLeap(year && (month == "February" || month == "Feb"))) days = 29;
        return days;
    }
    static msnMonth(month, year) {
        let days = daysInMonth(month, year);
        let msInMonth = days * DateTime.msnDay;
        return msInMonth;
    }
    static hoursAgo(stamp) {
        const then = toHours(stamp);
        const now = toHours(Date.now());
        const diffy = now - then;
        return diffy;
    }
    static secondsAgo(stamp) {
        const then = toSecondsFloat(stamp);
        const now = toSecondsFloat(Date.now());
        const diffy = now - then;
        const ago = {
            seconds: Math.floor(diffy),
            milliseconds: null
        };
        return ago;
    }
    static secondsLeft(milliseconds) {
        const minutes = toMinutesFloat(milliseconds);
        return minutes;
    }
    static toSeconds(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        return seconds;
    }
    static toSecondsFloat(milliseconds) {
        const seconds = milliseconds / 1000;
        return seconds;
    }
    static toMinutes(milliseconds) {
        let seconds = toSeconds(milliseconds);
        let minutes = Math.floor(seconds / 60);
        return minutes;
    }
    static toMinutesFloat(milliseconds) {
        const minutes = toSecondsFloat(milliseconds) / 60;
        const floored = Math.floor(minutes);
        const seconds = Math.floor((minutes - floored) / snm);
        const ago = {
            floored: floored,
            minutes: minutes,
            seconds: seconds,
            string: `${minutes} : minutes, and ${seconds} : seconds ago`
        };
        return ago;
    }
    static minutesAgo(stamp) {
        const now = toMinutesFloat(Date.now()).minutes;
        const then = toMinutesFloat(stamp).minutes;
        const minutes = Math.floor(now - then);
        const seconds = Math.floor((now - then - Math.floor(now - then)) / snm);
        const ago = {
            minutes: minutes,
            seconds: seconds,
            string: `${minutes} minutes, and ${seconds} seconds ago`
        };
        return ago;
    }
    static toHours(milliseconds) {
        let minutes = toMinutes(milliseconds);
        let hours = Math.floor(minutes / 60);
        return hours;
    }
    static toHoursFloat(milliseconds) {
        let minutes = toMinutesFloat(milliseconds);
        let hours = minutes / 60;
        return hours;
    }
    static toDays(milliseconds) {
        let hours = toHours(milliseconds);
        let days = Math.floor(hours / 24);
        return days;
    }
    static toDaysFloat(milliseconds) {
        let hours = toHoursFloat(milliseconds);
        let days = hours / 24;
        return days;
    }
    static toMonths(milliseconds) {}
    static toMonthsFloat(milliseconds) {}
    static toYears(milliseconds) {
        let days = toDays(milliseconds);
        let years = Math.floor(days / 365);
        return years;
    }
    // const minutesInYear = msnYear;
    static from(since) {
        const now = Date.now();
        const then = since.getTime();
        const monthsInYear = 1 / 12;
        const msInWeek = 604800000;
        const msInDay = 86400000;
        const msInHour = 3600000;
        const msInMin = 60000;
        const msInSec = 1000;
        const monthOf = date.months[since.getMonth()];
        const daysIn = date.monthMap[monthOf];
        const dayOf = since.getDate();
        const days = daysIn - dayOf;
        const leapSince = date.getLeaps(since.getFullYear(), new Date(now).getFullYear());
        let msAgo = now - then;
        let context = "ago";
        if (msAgo < 0) context = "til";
        msAgo = Math.abs(msAgo);
        const years = msAgo / msnYear;
        const monthsAgo = getRemainder(years);
        const months = monthsAgo / monthsInYear;
        // const weeks = monthsAgo / weeksInYear;
        const weeksAgo = Math.floor(msAgo / msInWeek);
        const daysAgo = Math.floor(msAgo / msInDay) + leapSince;
        const hoursAgo = Math.floor(msAgo / msInHour);
        const minutesAgo = Math.floor(msAgo / msInMin);
        const secondsAgo = Math.floor(msAgo / msInSec);
        const ago = {
            since: new Date(now),
            then: new Date(then),
            years: Math.floor(years),
            months: Math.floor(months),
            days: days,
            yearsAgo: years,
            weeksAgo: weeksAgo,
            daysAgo: daysAgo,
            hoursAgo: hoursAgo,
            minutesAgo: minutesAgo,
            secondsAgo: secondsAgo,
            leaps: leapSince,
            string: undefined
        };
        if (ago.yearsAgo >= 1) {
            if (ago.months >= 1) ago.string = `${ago.years} Years, ${ago.months} Months ${context}`;
            else if (ago.months < 1) ago.string = `${ago.years} Years ${context}`;
        } else if (ago.weeksAgo < 4 && ago.weeksAgo > 2) ago.string = `${ago.weeksAgo} Weeks ${context}`;
        else if (ago.daysAgo < 14 && ago.daysAgo > 2) ago.string = `${ago.daysAgo} Days ${context}`;
        else if (ago.hoursAgo <= 48 && ago.hoursAgo >= 1) {
            if (ago.hoursAgo < 2 && ago.hoursAgo >= 1) ago.string = `${ago.hoursAgo} Hour ${context}`;
            else ago.string = `${ago.hoursAgo} Hours ${context}`;
        } else if (ago.minutesAgo < 59 && ago.minutesAgo > 1) ago.string = `${ago.minutesAgo} Minutes ${context}`;
        else if (ago.secondsAgo < 60 && ago.secondsAgo > 30) ago.string = `${ago.secondsAgo} Seconds ${ago}`;
        else if (ago.secondsAgo < 30) ago.string = `Just Now`;
        else return ago;
        ago.time = ago.string.split(" ")[0];
        ago.suffix = ago.string.split(" ")[1];
        ago["context"] = context;
        return ago;
    }
    static getRemainder(float) {
        return float - Math.floor(float);
    }
}
class Time {
    constructor(){
        this.timers = [];
    }
    static setTimer(start, end) {}
}
// -------------------------
// Color
// -----------------------------------------
Array.prototype.toHslString = function() {
    if (!this.every((index)=>{
        !isNaN(index) && Number(index);
    })) return `hsl(${this[0]}deg,${this[1]}%,${this[2]}%)`;
};
Array.prototype.toHslaString = function(alpha) {
    if (!isNaN(this[3]) && Number(this[3])) alpha = this[3];
    if (alpha > 1) alpha = 1;
    if (alpha < 0) alpha = 0;
    if (isNaN(alpha)) return NaN;
    return `hsla(${this[0]}deg,${this[1]}%,${this[2]}%,${alpha})`;
};
class Color {
    constructor(props = {}){
        this.name = props.name || "";
        this.hex = props.hex || "";
        if (!this.hex) throw new Error("new colors require a hex value to be instatiated");
        this.uid = props.id || props._id || null;
        this.primaryColor = props.primaryColor || "";
        this.rgb = props.rgb?.slice() || Color.hexToRgb(this.hex);
        this.hsl = props.hsl?.slice() || Color.rgbToHsl(...this.rgb);
        this.hsv = props.hsv?.slice() || Color.hslToHsv(...this.hsl);
        this.tone = props.tone || Color.getTone(this.hsl[2], this.hsl[1])[0];
        this.alpha = null;
        console.log(this);
    }
    get red() {
        // this.rgb = hslToRgb(...this.selected.hsl);
        return this.rgb[0];
    }
    set red(num) {
        this.rgb[0] = num;
        this.hex = Color.rgbToHex(...this.rgb);
        this.hsl = Color.rgbToHsl(...this.rgb);
        this.hsv = Color.hslToHsv(...this.hsv);
        this.tone = Color.getTone(this.hsl[2], this.hsl[1])[0];
    }
    get green() {
        return this.rgb[2];
    }
    set green(num) {
        this.rgb[2] = num;
        this.hex = Color.rgbToHex(...this.rgb);
        this.hsl = Color.rgbToHsl(...this.rgb);
        this.hsv = Color.hslToHsv(...this.hsv);
        this.tone = Color.getTone(this.hsl[2], this.hsl[1])[0];
    }
    get blue() {
        return this.rgb[3];
    }
    set blue(num) {
        this.rgb[3] = num;
        this.hex = Color.rgbToHex(...this.rgb);
        this.hsl = Color.rgbToHsl(...this.rgb);
        this.hsv = Color.hslToHsv(...this.hsv);
        this.tone = Color.getTone(this.hsl[2], this.hsl[1])[0];
    }
    get hue() {
        return this.hsl[0];
    }
    set hue(num) {
        console.log("setting hue", this.hsv, this.hsl, this.rgb);
        this.hsl[0] = num;
        this.hsv = Color.hslToHsv(...this.hsl);
        this.rgb = Color.hslToRgb(...this.hsl);
        this.hex = Color.rgbToHex(...this.rgb);
        console.log("set hue", this.hsv, this.hsl, this.rgb);
    }
    get saturation() {
        return this.hsl[1];
    }
    set saturation(num) {
        this.hsl[1] = num;
        this.hsv = Color.hslToHsv(...this.hsv);
        this.rgb = Color.hslToRgb(...this.hsl);
        this.hex = Color.rgbToHex(...this.rgb);
    }
    get lightness() {
        return this.hsl[2];
    }
    set lightness(num) {
        this.hsl[2] = num;
        this.hsv = Color.hslToHsv(...this.hsv);
        this.rgb = Color.hslToRgb(...this.hsl);
        this.hex = Color.rgbToHex(...this.rgb);
        this.tone = Color.getTone(this.hsl[2], this.hsl[1])[0];
    }
    get hsvSaturation() {
        return this.hsv[1];
    }
    set hsvSaturation(num) {
        this.hsv[1] = num;
        this.hsl = Color.hsvToHsl(...this.hsv);
        this.rgb = Color.hslToRgb(...this.hsl);
        this.hex = Color.rgbToHex(...this.rgb);
        this.tone = Color.getTone(this.hsl[2], this.hsl[1])[0];
    }
    get hsvValue() {
        return this.hsv[2];
    }
    set hsvValue(num) {
        this.hsv[2] = num;
        this.hsl = Color.hsvToHsl(...this.hsv);
        this.rgb = Color.hslToRgb(...this.hsl);
        this.hex = Color.rgbToHex(...this.rgb);
        this.tone = Color.getTone(this.hsl[2], this.hsl[1])[0];
    }
    get tints() {
        return Color.getTints(this.hex);
    }
    get shades() {
        return Color.getShades(this.hex);
    }
    get lights() {
        return Color.getLights(this.hex);
    }
    get darks() {
        return Color.getDarks(this.hex);
    }
    get monochrome() {
        return {
            shades: this.shades,
            tints: this.tints,
            darks: this.darks,
            lights: this.lights
        };
    }
    get analogous() {
        // const anologies15 = 
        const toHex = (hsl)=>Color.rgbToHex(...Color.hslToRgb(...hsl));
        const a15 = [];
        const a30 = [];
        for(let i = 15; i <= 90; i += 15){
            let newArr = this.hsl.slice();
            newArr[0] += i;
            a15.push(toHex(newArr));
        }
        return a15;
    }
    get complimentary() {
        const toHex = (hsl)=>Color.rgbToHex(...Color.hslToRgb(...hsl));
        const c15 = [];
        const hsl = this.hsl.slice();
        hsl[0] = Math.abs(hsl[0] + 180 - 360);
        // for(let i = 15; i <= 45; i += 15){
        //     let newArr = hsl.slice();
        //     newArr[0] -= i;
        //     c15.push(toHex(newArr));
        // }
        // for(let i = 15; i <= 45; i += 15){
        //     let newArr = hsl.slice();
        //     newArr[0] += i;
        //     c15.push(toHex(newArr));
        // }
        for(let i = hsl[0] - 45; i < hsl[0] + 45; i += 15){
            let newArr = hsl.slice();
            newArr[0] = i;
            c15.push(toHex(newArr));
        }
        return c15;
    }
    get squared() {
        const toHex = (hsl)=>Color.rgbToHex(...Color.hslToRgb(...hsl));
        const s15 = [];
        for(let i = 90; i <= 360; i += 90){
            const hsl = this.hsl.slice();
            hsl[0] += i;
            s15.push(toHex(hsl));
        }
        return s15;
    }
    get compound() {
        const toHex = (hsl)=>Color.rgbToHex(...Color.hslToRgb(...hsl));
        // const hsl = this.hsl.slice();
        // hsl[0] = Math.abs((hsl[0] + 300) - 360);
        const cp15 = [];
        const cp1 = this.hsl.slice();
        cp1[0] = 90;
        cp15.push(toHex(cp1));
        const cp2 = this.hsl.slice();
        cp2[0] += 210;
        cp15.push(toHex(cp2));
        const cp3 = this.hsl.slice();
        cp3[0] += 300;
        cp15.push(toHex(cp3));
        console.log(cp15);
        // cp15.push(toHex(hsl))
        return cp15;
    }
    // get triadic() {
    //     const toHex = (hsl) => Color.rgbToHex(...Color.hslToRgb(...hsl));
    //     const t15 = [];
    //     const hsl = this.hsl.slice();
    //     const hsl1 = this.hsl.slice();
    //     const hsl2 = this.hsl.slice();
    //     hsl[0]
    //     for (let i = hsl[0]; i < hsl[0] + 240)
    //     hsl1[0] += 120;
    //     const t1 = hsl1.slice();
    //     t15.push(toHex(t1));
    //     const t2 = hsl1.slice();
    //     t2[0] += 15;
    //     t15.push(toHex(t2));
    //     const t3 = hsl1.slice();
    //     t3[0] -= 15;
    //     t15.push(toHex(t3));
    //     hsl2[0] += 240;
    //     const d1 = hsl2.slice();
    //     t15.push(toHex(d1));
    //     const d2 = hsl2.slice();
    //     d2[0] += 15;
    //     t15.push(toHex(d2));
    //     const d3 = hsl2.slice();
    //     d3[0] -= 15;
    //     t15.push(toHex(d3))
    //     return t15;
    // }
    get compliments() {
        return {
            monochrome: this.monochrome,
            analogous: this.analogous,
            complimentary: this.complimentary,
            // triadic: this.triadic,
            squared: this.squared,
            compound: this.compound
        };
    }
    get gradients() {
        return {
            "analogous": this.analogousGradient(),
            "mono": this.monoGradient(),
            "monolight": this.lightGradient(),
            "tinted": this.tintedGradient(),
            "shaded": this.shadedGradient(),
            "complimentary": this.complimentaryGradient()
        };
    }
    createGradient(angle = 180, clrSet, n = clrSet.length - 1) {
        return `linear-gradient(${angle}deg, ${clrSet.length >= 2 ? clrSet.slice(0, n <= clrSet.length - 1 ? n : clrSet.length - 1) : [
            "#fff",
            "#fff"
        ].join(",")})`;
    }
    monoGradient(deg = 180, type1 = "darks", n = 8) {
        console.log(type1);
        if (type1 !== "lights" && type1 !== "darks") return console.warn("monogradient functions needs type of lights or darks", type1);
        if (type1 == "darks") deg = 0;
        return this.createGradient(deg, this[type1], n);
    }
    lightGradient(deg) {
        return this.monoGradient(deg = 180, type = "lights");
    }
    tintedGradient(deg = 0) {
        return this.createGradient(deg, this.tints.slice(4, 10));
    }
    shadedGradient(deg = 180) {
        return this.createGradient(deg, this.shades.slice(4, 10));
    }
    analogousGradient(deg = 180) {
        return this.createGradient(deg, this.analogous);
    }
    complimentaryGradient(deg = 180) {
        return this.createGradient(deg, this.complimentary);
    }
    // triadicGradient(deg = 180) {
    //     return this.createGradient(deg,this.triadic)
    // }
    squaredGradient(deg = 180) {
        return this.createGradient(deg, this.squared);
    }
    compoundGradient(deg = 180) {
        return this.createGradient(deg, this.compound);
    }
    copy() {
        window.navigator.clipboard.writeText(this.hex);
    }
    static hslToHex(hsl) {
        return Color.rgbToHex(...Color.hslToRgb(...hsl));
    }
    static rgbToHsl(r, g, b) {
        let red = r / 255;
        let green = g / 255;
        let blue = b / 255;
        let colorMax = Math.max(red, green, blue);
        let colorMin = Math.min(red, green, blue);
        let delta = colorMax - colorMin;
        let midrange = (colorMax + colorMin) / 2;
        // midrange 
        // lightness is the average of the largest and smallest color components
        function getLightness() {
            let l = (colorMax + colorMin) / 2;
            return Math.round(l * 100);
        }
        // range
        // saturation is simply the chroma scaled to fill
        // the interval [0, 1] for every combination of hue and lightness
        function getSaturation() {
            let s = delta / (1 - Math.abs(2 * midrange - 1));
            return Math.round(s * 100);
        }
        // https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion
        function getHue() {
            let h;
            let differenceOverDelta = subtractOverDelta(delta);
            if (delta === 0) h = 0;
            if (colorMax === red) h = differenceOverDelta(green, blue) + (g < b ? 6 : 0);
            if (colorMax === green) h = differenceOverDelta(blue, red) + 2;
            if (colorMax === blue) h = differenceOverDelta(red, green) + 4;
            return Math.round(h * 60);
        }
        function subtractOverDelta(delta) {
            return function(expression1, expression2) {
                return (expression1 - expression2) / delta;
            };
        }
        let lightness = getLightness() || 0;
        let saturation = getSaturation() || 0;
        let hue = getHue() || 0;
        return [
            hue,
            saturation,
            lightness
        ];
    }
    static rgbToHex(r, g, b) {
        function create_HEX_String(values) {
            let string = "#" + values.join("");
            return string;
        }
        function toBase16(base10) {
            if (base10 === 0) return "00";
            if (base10 > 255) return "TooHigh";
            if (!Number.isInteger(base10)) {
                console.log(base10);
                console.log("NAN!");
                return parseInt(base10).toString(16);
            }
            if (base10 < 16) {
                const num = base10.toString(16);
                return "0" + num;
            }
            return base10.toString(16);
        }
        return create_HEX_String([
            toBase16(r),
            toBase16(g),
            toBase16(b)
        ]);
    }
    static hexToRgb(hex) {
        let a = hex.replace("#", "");
        let b = a.split("");
        let c = b.length;
        function toBase10(base16) {
            if (base16.toString().length > 2) return "too many digits for css";
            return parseInt(base16, 16);
        }
        function repeatThenConvertBase10(base16) {
            return toBase10(base16.repeat(2));
        }
        function convertThreeDigitHex(arrOfThree) {
            let values = arrOfThree.map(repeatThenConvertBase10);
            return values;
        }
        function convertSixDigitHex(sixDigitHex) {
            let values = sixDigitHex.split(/(..)/g).filter((s)=>s).map(toBase10);
            return values;
        }
        return c === 3 ? convertThreeDigitHex(b) : c === 6 ? convertSixDigitHex(a) : "invalid hex";
    // console.log(new Error(`${hex} is not a valid hex`));
    }
    static hslToRgb(hue, sat, light) {
        //https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
        hue = hue % 360;
        if (hue < 0) hue += 360;
        sat /= 100;
        light /= 100;
        console.log(hue, sat, light);
        function f(n) {
            let k = (n + hue / 30) % 12;
            let a = sat * Math.min(light, 1 - light);
            return Math.round(255 * (light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
        }
        return [
            f(0),
            f(8),
            f(4)
        ];
    }
    static hslToHsv(h, sat, lightness) {
        let s = sat / 100;
        let l = lightness / 100;
        let v = l + s * Math.min(l, 1 - l);
        if (v === 0) s = 0;
        else s = 2 * (1 - l / v);
        s = Math.round(s * 100);
        v = Math.round(v * 100);
        return [
            h,
            s,
            v
        ];
    }
    static hsvToHsl(hue, sat, value) {
        let h = hue;
        let s = sat / 100;
        let v = value / 100;
        let l = v * (1 - s / 2);
        if (l === 0 || l === 1) s = 0;
        else s = Math.round((v - l) / Math.min(l, 1 - l) * 100);
        l = Math.round(l * 100);
        return [
            h,
            s,
            l
        ];
    }
    static hexToHsv(hex) {
        return Color.hslToHsv(...Color.hexToHsl(hex));
    }
    static hexToHsl(hex) {
        return Color.rgbToHsl(...Color.hexToRgb(hex));
    }
    static deconstruct_HSL_String(strVal) {
        return strVal.replace("hsla", "").replace("(", "").replace(")", "").replace("deg", "").replaceAll("%", "").split(",").map(Number);
    }
    static getContrast(RGB) {
        // https://stackoverflow.com/questions/1855884/determine-font-color-based-on-background-color
        let d = 0;
        let [r, g, b] = RGB;
        // let [h,s,l] = color.hsl;
        // Counting the perceptive lightness - human eye favors green color...      
        let lightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        if (lightness > 0.5) d = 0; // bright colors - black font
        else d = 255; // dark colors - white font
        return rgbToHex(d, d, d);
    }
    static getTone(lightness, saturation) {
        /*  README
            SD[#] 'STANDARD DEVIATION' A RANGE CATCHING ANY COLORS THERIN
            S[#] 'SATURATION'
            L[#] 'LIGHTNESS'
    
            [[MOODY COLORS]]
            
            Earth Tones are defined as colors low in lightness and saturation
            L[45] - S[72] -- {SD[45] IF L[30] - S[45]}
    
            Jewel Tones are defined as colors low in lightness high in saturation
            L[50] - S[45+]
    
            
            [[BRIGHT COLORS]]
            
            Neon tones are high in saturation with a centered lightness
                L[45-50] - S[99+]
            Luminous tones are high in saturation and high in lightness
                L[75] - S[90+]
            Vivid tones are high in saturation with a lightness above 50% and below vivid thresholds of 70%
                L[45-50] - S[50-70]
        
            [[FLAT COLORS]]
            
            Pastel tones take a high lightness threshold starting from 70% and 
            any saturation that isn't gray within a 60% deviation
                L[70+] S[25+] -- {SD[60] IF L[90+]}
            
            Muted tones like pastel take a high lightness threshold just under pastel 
            but are muted by a lack of saturation spaning accross a 45%-60% threshold
                L[65-70] -- {SD[60-45]}
    
            Clean colors represent a catch all for flat colors with an average saturation and lightness
                L[45+] - S[32-70]
            
        */ let deviation = lightness - saturation;
        let result = [
            "no dice",
            false
        ];
        // when lightness is between 90 and 10 and saturation is less than 5
        // [grey,white,black]
        if (saturation <= 6) {
            if (lightness <= 10) return result = [
                "black",
                false
            ];
            if (lightness >= 90) return result = [
                "white",
                false
            ];
            return result = [
                "grey",
                true
            ];
        }
        if (lightness <= 5 && saturation <= 50) return result = [
            "black",
            false
        ];
        if (lightness > 4 && lightness < 9 && saturation < 20) return result = [
            "black",
            false
        ];
        if (lightness > 4 && lightness <= 9 && saturation >= 20) result = [
            "earth",
            false
        ];
        if (lightness === 100) return result = [
            "white",
            false
        ];
        if (lightness < 5) return result = [
            "black",
            false
        ];
        // when lightness is more than 45
        // [pastel,bright,muted]
        if (lightness > 45 && lightness <= 99 && saturation > 5) {
            if (deviation <= 60 && deviation > -5) {
                // grey catch
                if (deviation <= 60 && deviation > 56) // its greyish
                return result = [
                    "washed",
                    true
                ];
            }
            // grey catch
            if (deviation > 62) // light grey
            return result = [
                "grey",
                true
            ];
            // pastel catch
            if (lightness >= 65 && saturation > 10) {
                if (lightness >= 65 && lightness <= 80 && deviation < 0) return result = [
                    "clean",
                    false
                ];
                return result = [
                    "pastel",
                    false
                ];
            }
            // bright catch
            if (lightness < 70 && lightness >= 45 && saturation >= 45) {
                if (saturation >= 99 && lightness >= 45 && lightness <= 55) return result = [
                    "neon",
                    false
                ];
                if (saturation >= 90 && lightness >= 70) return result = [
                    "luminous",
                    false
                ];
                if (saturation > 80 && lightness >= 45 && lightness < 70) return result = [
                    "vivid",
                    false
                ];
            // if (saturation < 80 && saturation > 70 && lightness > 40 && lightness < 70)
            //     return result = ['vivid2',false];
            }
            // clean colors
            if (saturation > 32 && lightness > 45) return result = [
                "clean",
                false
            ];
            // muted colors
            if (lightness <= 65 && saturation < 70 && (deviation < 60 || saturation < 45)) return result = [
                "muted",
                false
            ];
        }
        // when lightness is less than 50
        // [earth,jewel]
        if (lightness <= 50 && lightness >= 10 && saturation > 5) {
            if (saturation <= 72 && lightness <= 45) return result = [
                "earth",
                false
            ];
            if (saturation >= 45) return result = [
                "jewel",
                false
            ];
            if (deviation < 45 && deviation > 0 && saturation < 45 && lightness < 30) // its an [earth,washed,muted] tone
            return result = [
                "earth",
                false
            ];
            if (deviation <= 0) return result = [
                "jewel",
                false
            ];
            return result = [
                "grey",
                true
            ];
        // its mid/natural grey
        }
        // last call for pastel
        if (lightness > 90 && lightness < 99) {
            if (deviation <= 60) return result = [
                "pastel",
                false
            ];
            return result = [
                "grey",
                true
            ];
        }
        return result;
    }
    static getHue(hue) {
        let color = undefined;
        let rangeFinder = [
            [
                0,
                15,
                "red"
            ],
            [
                15,
                45,
                "orange"
            ],
            [
                45,
                60,
                "yellow"
            ],
            [
                60,
                180,
                "green"
            ],
            [
                180,
                240,
                "blue"
            ],
            [
                240,
                300,
                "purple"
            ],
            [
                300,
                360,
                "rose"
            ]
        ];
        for(let i = 0; i < rangeFinder.length; i++)if (hue >= rangeFinder[i][0] && hue <= rangeFinder[i][1]) {
            color = rangeFinder[i][2];
            break;
        }
        return color;
    }
    static getShades(hexColor) {
        // Convert hex to RGB
        const hexToRgb = (hex)=>{
            const bigint = parseInt(hex.slice(1), 16);
            const r = bigint >> 16 & 255;
            const g = bigint >> 8 & 255;
            const b = bigint & 255;
            return {
                r,
                g,
                b
            };
        };
        // Convert RGB to hex
        const rgbToHex1 = (rgb)=>{
            return `#${(16777216 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
        };
        // Linear blend function
        const linearBlend = (color1, color2, ratio)=>{
            return color1 + ratio * (color2 - color1);
        };
        const shades = [];
        const baseColor = hexToRgb(hexColor);
        // Generate 20 shades
        for(let i = 0; i < 20; i++){
            const ratio = i / 20; // Varying from 0 to 1
            const shade = {
                r: linearBlend(baseColor.r, 0, ratio),
                g: linearBlend(baseColor.g, 0, ratio),
                b: linearBlend(baseColor.b, 0, ratio)
            };
            shades.push(rgbToHex1(shade));
        }
        return shades;
    }
    static getDarks(hexColor) {
        const validHex = (hex)=>hex.length === 7 && hex !== "#ffffff";
        const darks = [];
        const inc = 5;
        let count = 0;
        for(let i = 0; i < 20; i++){
            count += inc;
            let hexi = Color.darkenColor(hexColor, count);
            console.log(hexi);
            if (validHex(hexi)) darks.push(hexi);
            console.log(count);
        }
        return darks;
    }
    static getTints(hexColor) {
        // Convert hex to RGB
        const hexToRgb = (hex)=>{
            const bigint = parseInt(hex.slice(1), 16);
            const r = bigint >> 16 & 255;
            const g = bigint >> 8 & 255;
            const b = bigint & 255;
            return {
                r,
                g,
                b
            };
        };
        // Convert RGB to hex
        const rgbToHex1 = (rgb)=>{
            return `#${(16777216 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
        };
        // Linear blend function
        const linearBlend = (color1, color2, ratio)=>{
            return color1 + ratio * (color2 - color1);
        };
        const tints = [];
        const baseColor = hexToRgb(hexColor);
        // Generate 20 tints
        for(let i = 0; i < 20; i++){
            const ratio = i / 20; // Varying from 0 to 1
            const tint = {
                r: linearBlend(baseColor.r, 255, ratio),
                g: linearBlend(baseColor.g, 255, ratio),
                b: linearBlend(baseColor.b, 255, ratio)
            };
            tints.push(rgbToHex1(tint));
        }
        return tints;
    }
    static getLights(hex) {
        const validHex = (hex)=>hex.length === 7 && hex !== "#ffffff";
        const lights = [];
        const inc = 5;
        let count = 0;
        for(let i = 0; i < 20; i++){
            count += inc;
            let hexi = Color.lightenColor(hex, count);
            if (validHex(hexi)) lights.push(hexi);
            console.log(count);
        }
        return lights;
    }
    static lightenColor(hex, pct) {
        return Color.adjustColor(hex, pct);
    }
    static darkenColor(hex, pct) {
        return Color.adjustColor(hex, -pct);
    }
    static adjustColor(col = "#000000", amt) {
        var usePound = false;
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
        var num = parseInt(col, 16);
        var r = (num >> 16 & 0xFF) + amt;
        var g = (num >> 8 & 0xFF) + amt;
        var b = (num & 0xFF) + amt;
        r = r > 255 ? 255 : r < 0 ? 0 : r;
        g = g > 255 ? 255 : g < 0 ? 0 : g;
        b = b > 255 ? 255 : b < 0 ? 0 : b;
        r = ("0" + r.toString(16)).slice(-2);
        g = ("0" + g.toString(16)).slice(-2);
        b = ("0" + b.toString(16)).slice(-2);
        return (usePound ? "#" : "") + r + g + b;
    }
}
// const red = new Color('red', { hex: '#fff'});
// console.log(red)
// console.log(red.hsl.toHslString(.5))
// console.log(Color.rgbToHex( 15, 76, 48 ))
console.log(toBase16(9));
console.log(toBase16(76));
console.log(toBase16(48));
function toBase16(base10) {
    // console.log(base10)
    if (base10 === 0) return "00";
    if (base10 > 255) return "TooHigh";
    if (!Number.isInteger(base10)) {
        console.log(base10);
        console.log("NAN!");
        return parseInt(base10).toString(16);
    }
    let num = base10.toString(16);
    if (num < 10) return "0" + num;
    return base10.toString(16);
}
// function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
// function toHex(n) {
//  n = parseInt(n,10);
//  if (isNaN(n)) return "00";
//  n = Math.max(0,Math.min(n,255));
//  return "0123456789ABCDEF".charAt((n-n%16)/16)
//       + "0123456789ABCDEF".charAt(n%16);
// }
// const rotateHue = rotation => ({hue, ...rest}) => {
//     const modulo = (x, n) => (x % n + n) % n;
//     const newHue = modulo(hue + rotation, 360);
//   return { ...rest, hue: newHue };
//   }
// const rotate30 = rotateHue(30);
// const getComplementary = rotateHue(180);
// const getTriadic = color => {
//     const first = rotateHue(120);
//     const second = rotateHue(-120);
//         return [first(color), second(color)];
// }
// const saturate = x => ({saturation, ...rest}) => ({
//     ...rest,
//     saturation: Math.min(1, saturation + x),
// });
// const desaturate = x => ({saturation, ...rest}) => ({
//     ...rest,
//     saturation: Math.max(0, saturation - x),
// });
// const lighten = x => ({lightness, ...rest}) => ({
//     ...rest,
//     lightness: Math.min(1, lightness + x)
// });
// const darken = x => ({lightness, ...rest}) => ({
//     ...rest,
//     lightness: Math.max(0, lightness - x)
// });
class KeyBinder {
    constructor(){
        this.shift = false;
    }
    addGlobalShift(keys, cb, timeout = 1000) {
        log("adding shifter");
        log(keys);
        document.addEventListener("keyup", (e)=>{
            if (e.shiftKey || e.key === "Shift") {
                this.shift = true;
                console.log("shift mapper on");
                console.log("press", keys, "at any time to callback");
                setTimeout(()=>{
                    this.shift = false;
                    console.log("shift mapper off");
                }, timeout);
            }
            if (this.shift && keys.includes(e.key)) {
                console.log("keybinding activated calling back");
                cb();
            }
        });
    }
}

//# sourceMappingURL=index.552bd9ce.js.map
