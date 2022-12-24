import React from 'react'
import styles from '../ReactRouter/styles.module.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import ReduxUserForm from './components/ReduxUserForm'
import ReduxUserList from './components/ReduxUserList'
import store from './store'

function ReduxTs() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className={styles.link}>
            <Link to={'/list'}>List</Link>
          </li>
          <li className={styles.link}>
            <Link to={'/form'}>Form</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/list' element={<ReduxUserList />} />
          <Route path='/form' element={<ReduxUserForm />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default ReduxTs