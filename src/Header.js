import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
        <div className='header__logo'>
        <StorefrontIcon className="header__logoimage" fontSize="large" />
        <h1 className='header__logo'>eSHOP</h1>
        </div>
      <div className='header__search'>
        <input type="text" className="header__searchInput" ></input>
        <SearchIcon className="header_searchIcon" />
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
  )
}

export default Header