import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './RouterPage';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}>
                            {route.children &&
                                route.children.map((child, childIndex) =>
                                    child.index ? (
                                        <Route key={childIndex} index element={child.element} />
                                    ) : (
                                        <Route key={childIndex} path={child.path} element={child.element} />
                                    )
                                )}
                        </Route>
                    ))}
                </Routes>
            </Router>
        </div>
    )
}

export default Routers;