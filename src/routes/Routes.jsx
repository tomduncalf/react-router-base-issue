import * as React from 'react'
import { Router, Route, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

const history = useRouterHistory(createHistory)({ basename: 'http://null.jsbin.com/poqige/' })

import App from 'components/App'
import Hello from 'components/Hello'
import Goodbye from 'components/Goodbye'

export default () => (
    <Router history={history}>
        <Route path='/' component={App}>
            <Route path='/hello' component={Hello} />
            <Route path='/goodbye' component={Goodbye} />
        </Route>
    </Router>
)
