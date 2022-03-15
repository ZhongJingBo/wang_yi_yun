import React from 'react';
import Home from '../application/home/Home';
import Recommend from '../application/Recommend/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';


const routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: "recommend",
                element: <Recommend />
            }
            , {
                path: "singers",
                element: <Singers />
            }
            , {
                path: "rank",
                element: <Rank />
            }
        ]
    }
]

export default routes;