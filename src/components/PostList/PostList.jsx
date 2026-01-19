import PostCard from '../PostCard/PostCard';

function PostList({ posts = [], onPostClick }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="post-list-empty">
        <p>No posts found</p>
      </div>
    );
  }

  return (
    <div className="post-list">
      {posts.map((post, index) => {
        if (!post) return null;
        // Use original index if available, otherwise use current index
        const originalIndex = post.__originalIndex !== undefined ? post.__originalIndex : index;
        return (
          <PostCard 
            key={post.id || post.title || `post-${index}`} 
            post={post}
            index={originalIndex}
            cardNumber={index + 1}
            onClick={() => onPostClick?.(post)}
          />
        );
      })}
    </div>
  );
}

export default PostList;
