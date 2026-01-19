import PostCard from '../PostCard/PostCard';

function PostList({ posts = [], onPostClick }) {
  if (posts.length === 0) {
    return (
      <div className="post-list-empty">
        <p>No posts found</p>
      </div>
    );
  }

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostCard 
          key={post.id || post.title} 
          post={post}
          index={index}
          cardNumber={index + 1}
          onClick={() => onPostClick?.(post)}
        />
      ))}
    </div>
  );
}

export default PostList;
