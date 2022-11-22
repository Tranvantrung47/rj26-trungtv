import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Navigation from './common/Navigation'
import FormUser from './FormUser'
import ListUser from './ListUser'
import DetailUser from './DetailUser'

import styles from '../ReactRouter/styles.module.css';

function ConfigRoute() {
    return (
        <BrowserRouter>
            <ul className={styles.navigation}>
                <li className={styles.link}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.link}>
                    <Link to={'/list'}>List</Link>
                </li>
                <li className={styles.link}>
                    <Link to={'/form'}>Form</Link>
                </li>
            </ul>


            {/* <div>
                <Link to={'/list'} style={{ margin: '20px' }} >List</Link>
                <Link to={'/form'} >Form</Link>
            </div> */}

            {/* <Navigation/> */}



            <Routes>
                <Route path='/list' element={<ListUser />} />
                <Route path='/form' element={<FormUser />} />
                <Route path='/form/:id' element={<FormUser />} />
                <Route path='/detail/:id' element={<DetailUser />} />

                <Route
                    path='*'
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>404 Page not found</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default ConfigRoute
