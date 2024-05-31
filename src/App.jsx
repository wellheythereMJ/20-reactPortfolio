import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


function App() {

  return (
    <>
    <Header />
    <main className='min-vh-100'>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
