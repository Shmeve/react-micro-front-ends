import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (nextPathname !== pathname) {
                history.push(nextPathname);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');

    if (el) {
        mount(el, {});
    }
}

export { mount };