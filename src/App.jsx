import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import PostList from './components/PostList/PostList';
import Modal from './components/Modal/Modal';
import logo from './assets/Logo.png';
import searchIcon from './assets/CombinedShape.png';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle scroll position on page load
  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Check if this is a page refresh (has scroll position in sessionStorage)
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    
    if (savedScrollPosition) {
      // Restore scroll position after a short delay to ensure DOM is ready
      const scrollY = parseInt(savedScrollPosition, 10);
      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 100);
    } else {
      // First visit or no saved position - start at top
      window.scrollTo(0, 0);
    }

    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Fetch posts data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search query
  useEffect(() => {
    if (!posts || posts.length === 0) {
      setFilteredPosts([]);
      return;
    }

    if (!searchQuery.trim()) {
      setFilteredPosts(posts);
      return;
    }

    try {
      const searchTerm = searchQuery.toLowerCase().trim();
      const filtered = posts.filter(post => {
        if (!post) return false;
        
        // Check all text fields in the post
        const titleMatch = post.title?.toLowerCase().includes(searchTerm);
        const textMatch = post.text?.toLowerCase().includes(searchTerm);
        const descriptionMatch = post.description?.toLowerCase().includes(searchTerm);
        
        // Check category if it exists
        const categoryMatch = post.category?.toLowerCase().includes(searchTerm);
        
        // Check author if it exists
        const authorMatch = post.author?.toLowerCase().includes(searchTerm);
        
        // Check tags if they exist
        const tagsMatch = Array.isArray(post.tags) && post.tags.some(tag => 
          tag?.toLowerCase().includes(searchTerm)
        );
        
        // Return true if any field contains the search term
        return titleMatch || textMatch || descriptionMatch || categoryMatch || authorMatch || tagsMatch;
      });

      setFilteredPosts(filtered);
    } catch (error) {
      console.error('Error filtering posts:', error);
      setFilteredPosts(posts); // Fallback to showing all posts on error
    }
  }, [searchQuery, posts]);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <button 
          className="mobile-burger-menu"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
        <div className="mobile-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="mobile-search-icon" onClick={() => {}}>
          <img src={searchIcon} alt="Search" />
        </div>
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <div className="container">
        {isLoading && (
          <div className="loading">
            <p>Loading posts...</p>
          </div>
        )}
        
        {error && (
          <div className="error">
            <p>Error: {error}</p>
          </div>
        )}
        
        {!isLoading && !error && (
          <PostList 
            posts={filteredPosts} 
            onPostClick={handlePostClick}
          />
        )}
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        post={selectedPost}
      />
    </div>
  );
}

export default App;
