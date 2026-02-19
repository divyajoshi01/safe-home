import AppNavbar from './components/AppNavbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import "../src/styles/hero.css";
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <Sidebar />

      {/* Main content area */}
      <main className="flex-grow-1">
        <Outlet /> {/*  routes ke according pages change honge */}
      </main>
      <Footer />
    </div>
  );
}

export default App;