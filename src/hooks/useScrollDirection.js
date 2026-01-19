import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isMenuSticky, setIsMenuSticky] = useState(true);

  useEffect(() => {
    // Initialize with current scroll position
    const initialScrollY = window.scrollY;
    let lastScrollY = initialScrollY;
    let ticking = false;

    // Set initial state based on scroll position
    if (initialScrollY === 0) {
      setIsMenuVisible(true);
      setIsMenuSticky(false);
    }

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const menuTopPosition = 81.5; // Menu starts at 81.5px from top
      const stickDuration = 200; // Stick for 200px
      const stickStart = menuTopPosition; // Start sticking when menu reaches top
      const stickEnd = stickStart + stickDuration; // Stop sticking after 200px
      
      setScrollY(currentScrollY);
      
      if (currentScrollY < stickStart) {
        // Before menu reaches top - normal flow, not sticky
        setIsMenuVisible(true);
        setIsMenuSticky(false);
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
      } else if (currentScrollY >= stickStart && currentScrollY <= stickEnd) {
        // Menu reached top and sticks for 200px
        setIsMenuVisible(true);
        setIsMenuSticky(true);
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
      } else {
        // Past stick duration - check scroll direction
        if (currentScrollY > lastScrollY) {
          // Scrolling down past stick duration - hide menu (scroll out)
          setScrollDirection('down');
          setIsMenuVisible(false);
          setIsMenuSticky(false);
        } else {
          // Scrolling up past stick duration - show menu and make sticky again
          setScrollDirection('up');
          setIsMenuVisible(true);
          setIsMenuSticky(true);
        }
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    // Initialize state on mount
    updateScrollDirection();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollY, scrollDirection, isMenuVisible, isMenuSticky };
}
