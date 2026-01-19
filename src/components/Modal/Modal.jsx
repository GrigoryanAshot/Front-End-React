function Modal({ isOpen, onClose, post }) {
  if (!isOpen || !post) return null;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-body">
          <h1 className="modal-title">{post.title}</h1>
          {post.date && (
            <div className="modal-meta">
              <span className="modal-date">{formatDate(post.date)}</span>
              {post.author && (
                <span className="modal-author">{post.author}</span>
              )}
            </div>
          )}
          {post.img && (
            <div className="modal-image">
              <img
                src={post.img}
                srcSet={post.img2x ? `${post.img} 1x, ${post.img2x} 2x` : undefined}
                alt={post.title}
              />
            </div>
          )}
          <div className="modal-description">
            {post.text ? (
              <p>{post.text}</p>
            ) : post.description ? (
              <p>{post.description}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
