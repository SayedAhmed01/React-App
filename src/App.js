import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


function App() {
  return (
    <div>
  

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="d-flex flex-grow-1">
        <span class="w-100 d-lg-none d-block">
          
        <a class="navbar-brand d-none d-lg-inline-block" href="#"> Navbar 6 </a>
      
        <div class="w-100 text-right">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul class="navbar-nav ms-auto flex-nowrap">
            <li class="nav-item">
                <a href="#" class="nav-link m-2 menu-item nav-active">Our Solution</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link m-2 menu-item">How We Help</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link m-2 menu-item">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link m-2 menu-item">Contact</a>
            </li>
        </ul>
    </div>
</nav>
    </div>
  );
}

export default App;
