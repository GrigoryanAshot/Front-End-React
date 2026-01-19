import { useState, useEffect } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import logo from '../../assets/Logo.png';
import searchIcon from '../../assets/CombinedShape.png';
import Menu from '../Menu/Menu';

function Header({ searchQuery, onSearchChange }) {
  const { isMenuVisible, scrollY, isMenuSticky } = useScrollDirection();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (e) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <header className={`header ${!isMenuVisible ? 'menu-hidden' : ''}`}>
      <div className={`header-top ${!isMenuVisible ? 'menu-hidden' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className={`header-line-2 ${!isMenuVisible ? 'menu-hidden' : ''}`}></div>
          <div className={`header-search-container ${isSearchOpen ? 'search-open' : ''}`}>
            {isSearchOpen && (
              <input
                type="text"
                className="search-input-field"
                placeholder="Search..."
                value={searchQuery || ''}
                onChange={handleSearchInputChange}
                autoFocus
              />
            )}
            <div className="search-icon" onClick={handleSearchClick}>
              <img src={searchIcon} alt="Search" className="search-icon-img" />
            </div>
          </div>
        </div>
      </div>
      <div className={`header-menu-container ${isMenuVisible ? 'menu-visible' : 'menu-hidden'} ${isMenuSticky ? 'menu-sticky' : ''}`}>
        <div className="header-line"></div>
        <div className="header-menu-wrapper">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
