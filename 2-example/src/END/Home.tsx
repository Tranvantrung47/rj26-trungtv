import React,{useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FormUser from './FormUser'
import ListUser from './ListUser'
import styles from '../ReactRouter/styles.module.css';
import Navigation from './Navigation'
import Login from './Login';

function Home() {
    const [isLike,setIslike] = useState (true);
    const handleClick = () => {
        setIslike(!isLike);
    }
    return (
        <BrowserRouter>
            <ul className={styles.navigation}>
                <li className={styles.link}>
                    <Link to={'/navigation'}>Home</Link>
                </li>
                <li className={styles.link}>
                    <Link to={'/list'}>List</Link>
                </li>
                <li className={styles.link}>
                    <Link to={'/form'}>Form</Link>
                </li>
                <li className={styles.link}>
                    <Link to={'/'}><button style={{backgroundColor:'yellow'}} onClick={handleClick}>{isLike ?  "Login" : "Logout"}</button></Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/navigation' element={<Navigation />} />
                <Route path='/list' element={<ListUser />} />
                <Route path='/form' element={<FormUser />} />
                <Route path='/form/:id' element={<FormUser />} />
               

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


export default Home
