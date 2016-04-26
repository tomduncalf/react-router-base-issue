import * as React from 'react'
import * as ReactDOM from 'react-dom'

const render = () => {
    const Routes = require('routes/Routes').default

    ReactDOM.render(
        <Routes />,
        document.querySelector('#app')
    )
}

if (module.hot) {
    module.hot.accept('routes/Routes', () => {
        render()
    })
}

render()
