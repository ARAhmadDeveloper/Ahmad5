import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../../pages/home/Home';
import Service from '../../pages/service/Service';
import CounterApp from '../../pages/About/CounterApp';






export default function Navigation(){
    return(

        <BrowserRouter >
        <Routes>
        <Route path='/home'  element={<Home/>} />
            <Route path='/'  element={<Home/>} />
            <Route path='/service'  element={<Service/>} />
            <Route path='/counterapp'  element={<CounterApp/>} />



            {/* <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blog' element={<Blog/>} /> */}
        </Routes>
        
        
        
        
        </BrowserRouter>





    );
}