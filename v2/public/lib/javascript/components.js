function ToggleList(  elements , classList = ['active'], listener = 'click' ) {

    this.elements = elements;
    this.classList = classList;

    this.add = function(element) {
        this.elements.push(element);
    }
    
    elements.forEach(element => {

        element.addEventListener(listener, () => {

            elements.forEach(element => element.classList.remove(...classList));
            element.classList.add(...classList);

        })

    })
}