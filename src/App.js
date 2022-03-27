import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { GlobalStyle } from './styles';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index'


const Pages = () => {
    let element = useRoutes(routes);
    return element
}



function App () {
    return (

        <BrowserRouter>
            <IconStyle></IconStyle>
            <GlobalStyle></GlobalStyle>
            <Pages />
        </BrowserRouter>

    )
}

export default App;
