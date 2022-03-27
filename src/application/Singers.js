import React, { useEffect } from 'react';
import store from '../redux/store.js';

import { hide, show } from '../redux/actionCreator'


function Singers () {
    useEffect(() => {
        store.dispatch(hide())
        return () => {
            store.dispatch(show())
        }
    }, [])

    return (
        <>

            <p>7777</p>
        </>
    )
}

export default Singers;
