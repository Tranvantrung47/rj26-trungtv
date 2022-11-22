import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import SettingPage from './Pages/Setting'

import styles from './styles.module.css';
function Index() {
  return (
    <div>
      <BrowserRouter>
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.link}>
            <Link to='/about'>About</Link>
          </li>
          <li className={styles.link}>
            <Link to='/setting'>Settings</Link>
          </li>
        </ul>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/setting' element={<SettingPage />} />


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
    </div>
  )
}

export default Index
