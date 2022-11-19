import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import Main from './Main';

function Router () {

    const routeMain = () => {
        console.log('routeMain')
        return (
            <>
            
                <Routes>
                    <Route path={`/*`} element={<Main />} />
                </Routes>
            </>
        );
    };


    return (
        <Routes>
            <Route path={`/`} element={routeMain()} />
        </Routes>
    );
}

export default Router;
