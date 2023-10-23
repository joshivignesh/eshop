import './App.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function App() {
  return (
    <div className="App">
      <div className='header__logo'>
        </div>
      <div className='header__search'>
        </div>
      <div className='header__nav'>
        <div className='nav__item'>
          <span  class="nav__itemLineOne">Hello Guest</span> 
          <span  class="nav__itemLineTwo">Sign In</span> 
          </div>  
        <div className='nav__item'>
          <span  class="nav__itemLineOne">Your</span> 
          <span  class="nav__itemLineTwo">Shop</span> 
          </div>  
        <div className='nav__item'>
            <ShoppingBasketIcon fontSize="large" />
            <span  class="nav__itemLineTwo">0</span> 
          </div>  
        </div>
    </div>
  );
}

export default App;
