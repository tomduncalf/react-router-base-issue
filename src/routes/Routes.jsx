import * as React from 'react'
import { Router, Route, useRouterHistory, browserHistory } from 'react-router'
import { createHistory } from 'history'

const history = useRouterHistory(createHistory)({ basename: 'http://127.0.0.1:3000/' })
//const history = browserHistory

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
