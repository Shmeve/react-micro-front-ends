import faker from 'faker';


const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
}

// Execution Context 1: Running in dev (isolation) -> Local index.html
// Immediate render in local element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-cart");

    if (el) {
        mount(el);
    }
}

// Execution Context 2: Running in dev/prod (within Container) -> Container/index.html
// Wait until called to render in remote element
export { mount };