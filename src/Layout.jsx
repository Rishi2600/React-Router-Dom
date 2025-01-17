import { Header } from './components/Header/header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />          {/*here we have all the dynmaic stuff of out website ohter than the layouts such as Home, About, Contact Us */}
    <Footer />
    </>
  )
}

export default Layout