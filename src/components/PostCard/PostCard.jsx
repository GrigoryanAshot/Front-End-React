function PostCard({ post, index = 0, cardNumber = 1, onClick }) {
  if (!post) return null;
  
  try {
    const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Category mapping for cards 1-9
  const categories = [
    'Lifestyle', // Card 1 (index 0)
    'Lifestyle', // Card 2 (index 1)
    'Style',     // Card 3 (index 2)
    'Style',     // Card 4 (index 3)
    'Lifestyle', // Card 5 (index 4)
    'Events',    // Card 6 (index 5)
    'Travel',    // Card 7 (index 6)
    'Travel',    // Card 8 (index 7)
    'Music'      // Card 9 (index 8)
  ];

  // Title mapping for cards 1-9
  const titles = [
    'Eat Right For Your Exercise Regime', // Card 1 (index 0)
    'The Look: Perfect Balance',          // Card 2 (index 1)
    'Fun Things to Do in Rome',           // Card 3 (index 2)
    '24 Colorful Ceilings That Add Unexpected Contrast to Any Room', // Card 4 (index 3)
    '9 New Songs to Heat Up Your Fall Playlist', // Card 5 (index 4)
    'What You Need on Your Bedside Table', // Card 6 (index 5)
    'When Two Wheels Are Better Than Four', // Card 7 (index 6)
    '26 Living Room Ideas from the Homes of Top Designers', // Card 8 (index 7)
    'What Makes Your City\'s Style Unique' // Card 9 (index 8)
  ];

  // Ensure index is within bounds (0-8 for the hardcoded arrays)
  const safeIndex = index >= 0 && index < categories.length ? index : 0;
  const category = categories[safeIndex] || 'Lifestyle';
  const title = titles[safeIndex] || post.title || 'Eat Right For Your Exercise Regime';

  return (
    <article className={`post-card ${cardNumber === 4 ? 'post-card-4' : ''}`} onClick={onClick}>
      <div className="post-card-inner">
        {post.img && (
          <div className="post-card-image">
            <img
              src={post.img}
              srcSet={post.img2x ? `${post.img} 1x, ${post.img2x} 2x` : undefined}
              alt={post.title || 'Post image'}
              loading="lazy"
            />
          </div>
        )}
        <div className="post-card-content">
          <div className="post-card-frame">
            <div className="post-card-category">{category}</div>
            <h2 className="post-card-title-main">{title}</h2>
            <div className="post-card-media">
              <span className="post-card-author-name">Niek Bove</span>
              <span className="post-card-date-text">April 8, 2018</span>
              <span className="post-card-dot post-card-dot-1"></span>
              <span className="post-card-views">3K Views</span>
              <span className="post-card-dot post-card-dot-2"></span>
            </div>
            <p className="post-card-text">
              Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…
            </p>
          </div>
        </div>
      </div>
    </article>
    );
  } catch (error) {
    console.error('Error rendering PostCard:', error);
    return null;
  }
}

export default PostCard;
