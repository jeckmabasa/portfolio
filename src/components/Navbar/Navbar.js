import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { About } from '../../pages/About';
import { Home } from '../../pages/Home';
import { Experience } from '../../pages/Experience';
import { Projects } from '../../pages/Projects';
import { Contact } from '../../pages/Contact';

export const Navbar = () => {
    return <div className='Navbar'>
        <Router>
            <div className='NavbarLinks'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/about" element={<About/>} />
                <Route path="/experience" element={<Experience />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </div>
};