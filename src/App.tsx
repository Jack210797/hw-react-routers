import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import About from './components/Pages/About'
import Contacts from './components/Pages/Contacts'
import Home from './components/Pages/Home'
import NotFound from './components/Pages/NotFound'
import Login from './components/Layouts/Login'
import Registration from './components/Layouts/Registration'
import Layouts from './components/Layouts'
import { ComponentType } from 'react'

interface RouteInterface {
  path: string
  component: ComponentType
  name: string
}

export const routes: RouteInterface[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contacts', component: Contacts, name: 'Contacts' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/registration', component: Registration, name: 'Registration' },
  { path: '*', component: NotFound, name: 'NotFound' }
]

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
