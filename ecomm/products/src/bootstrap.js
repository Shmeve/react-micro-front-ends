import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();

        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

// Execution Context 1: Running in dev (isolation) -> Local index.html
// Immediate render in local element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-products");

    if (el) {
        mount(el);
    }
}

// Execution Context 2: Running in dev/prod (within Container) -> Container/index.html
// Wait until called to render in remote element
export { mount };