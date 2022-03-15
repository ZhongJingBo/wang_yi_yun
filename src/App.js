import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { GlobalStyle } from './styles';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index'
import { Provider } from 'react-redux'
import store from './store/index'

const Pages = () => {
    let element = useRoutes(routes);
    return element
}



function App () {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <IconStyle></IconStyle>
                <GlobalStyle></GlobalStyle>
                <Pages />
            </BrowserRouter>
        </Provider>
    )
}

export default App;
