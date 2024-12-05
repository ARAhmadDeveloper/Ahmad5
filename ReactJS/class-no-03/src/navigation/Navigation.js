import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact';
import Blog from '../pages/blog/Blog';








export default function Navigation(){
    return(

        <BrowserRouter >
        <Routes>
        <Route path='/home'  element={<Home/>} />
            <Route path='/'  element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blog' element={<Blog/>} />
        </Routes>
        
        
        
        
        </BrowserRouter>





    );
}