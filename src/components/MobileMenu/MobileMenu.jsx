import logo from '../../assets/Logo.png';
import PathIcon from '../../assets/Path.png';

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="mobile-menu-line"></div>
        <div className="mobile-menu-line-vertical"></div>
        <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <span className="close-line close-line-1"></span>
          <span className="close-line close-line-2"></span>
        </button>
        <div className="mobile-menu-copy">
          <div className="mobile-menu-underline mobile-menu-underline-1"></div>
          <div className="mobile-menu-underline mobile-menu-underline-2"></div>
          <div className="mobile-menu-underline mobile-menu-underline-3"></div>
          <div className="mobile-menu-underline mobile-menu-underline-4"></div>
          <div className="mobile-menu-underline mobile-menu-underline-5"></div>
          <div className="mobile-menu-item mobile-menu-item-1">
            <span className="mobile-menu-item-text">Demos</span>
            <div className="mobile-menu-arrow-container">
              <img src={PathIcon} alt="" className="mobile-menu-arrow" />
            </div>
          </div>
          <div className="mobile-menu-item mobile-menu-item-2">
            <span className="mobile-menu-item-text">Post</span>
            <div className="mobile-menu-arrow-container">
              <img src={PathIcon} alt="" className="mobile-menu-arrow" />
            </div>
          </div>
          <div className="mobile-menu-item mobile-menu-item-3">
            <span className="mobile-menu-item-text">Features</span>
            <div className="mobile-menu-arrow-container">
              <img src={PathIcon} alt="" className="mobile-menu-arrow" />
            </div>
          </div>
          <div className="mobile-menu-item mobile-menu-item-4">
            <span className="mobile-menu-item-text">Categories</span>
            <div className="mobile-menu-arrow-container">
              <img src={PathIcon} alt="" className="mobile-menu-arrow" />
            </div>
          </div>
          <div className="mobile-menu-item mobile-menu-item-5">
            <span className="mobile-menu-item-text">Shop</span>
            <div className="mobile-menu-arrow-container">
              <img src={PathIcon} alt="" className="mobile-menu-arrow" />
            </div>
          </div>
          <div className="mobile-menu-item mobile-menu-item-6">
            <span className="mobile-menu-item-text">Buy Now</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;
