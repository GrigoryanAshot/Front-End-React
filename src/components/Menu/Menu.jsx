import { useScrollDirection } from '../../hooks/useScrollDirection';
import PathIcon from '../../assets/Path.png';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#demos">
            <span className="menu-text">Demos</span>
            <div className="dropdown-arrow-container">
              <img src={PathIcon} alt="" className="dropdown-arrow" />
            </div>
          </a>
        </li>
        <li className="menu-item has-submenu">
          <a href="#post">
            <span className="menu-text menu-text-post">Post</span>
            <div className="dropdown-arrow-container">
              <img src={PathIcon} alt="" className="dropdown-arrow" />
            </div>
          </a>
          <ul className="submenu">
            <div className="submenu-group">
              <div className="submenu-item submenu-item-1">
                <span className="submenu-item-text">Post Header</span>
                <img src={PathIcon} alt="" className="submenu-item-arrow" />
              </div>
              <div className="submenu-item submenu-item-2">
                <span className="submenu-item-text">Post Layout</span>
                <img src={PathIcon} alt="" className="submenu-item-arrow" />
              </div>
              <div className="submenu-item submenu-item-3">
                <span className="submenu-item-text">Share Buttons</span>
                <img src={PathIcon} alt="" className="submenu-item-arrow" />
              </div>
              <div className="submenu-item submenu-item-4">
                <span className="submenu-item-text">Gallery Post</span>
                <img src={PathIcon} alt="" className="submenu-item-arrow" />
              </div>
              <div className="submenu-item submenu-item-5">
                <span className="submenu-item-text">Video Post</span>
                <img src={PathIcon} alt="" className="submenu-item-arrow" />
              </div>
              <div className="submenu-line submenu-line-1"></div>
              <div className="submenu-line submenu-line-2"></div>
              <div className="submenu-line submenu-line-3"></div>
              <div className="submenu-line submenu-line-4"></div>
            </div>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#features">
            <span className="menu-text">Features</span>
            <div className="dropdown-arrow-container">
              <img src={PathIcon} alt="" className="dropdown-arrow" />
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a href="#categories">
            <span className="menu-text">Categories</span>
            <div className="dropdown-arrow-container">
              <img src={PathIcon} alt="" className="dropdown-arrow" />
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a href="#shop">
            <span className="menu-text">Shop</span>
            <div className="dropdown-arrow-container">
              <img src={PathIcon} alt="" className="dropdown-arrow" />
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a href="#buy-now">
            <span className="menu-text">Buy Now</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
