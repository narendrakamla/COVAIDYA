import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/Page2/About';
import Cart from './Component/Page3/Cart';
import Shop from './Component/Page3/Shop';
import NearHospital from './Component/Page4/NearHospital';
import Contact from './Component/page5/Contact';
function App()
{
    return (<div>
        <Router>
        <Header/>
            <div className="container">
        
<Switch>
<Route exact path="/" component={Home}></Route>
<Route exact  path="/home" component={Home}></Route>
<Route exact path="/about" component={About}></Route>
<Route exact path="/shop" component={Shop}></Route>
<Route exact path="/cart" component={Cart}></Route>
<Route exact path="/contact" component={Contact}></Route>
<Route exact path="/nearhospital" component={NearHospital}></Route>
<Home/>
</Switch>
<Footer/>
</div>
        </Router>
    </div>)
}
export default App;