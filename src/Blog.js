import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import postsData from './posts.json';
import './Blog.css';

function Blog() {
  // Posts nach Datum sortieren (neueste zuerst)
  const blogPosts = [...postsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1 className="blog-title">💡 Wissen stapeln, Ideen entfalten</h1>
        <p className="blog-subtitle">
          Entdecke Artikel über Technologie, Entwicklung und kreative Lösungen. 
          Hier stapelt sich Wissen, das deine Perspektive erweitert.
        </p>
      </div>
      
      <div className="blog-container">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              {/* Tags anzeigen */}
              <div className="blog-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">
                    <Tag className="tag-icon" />
                    {tag}
                  </span>
                ))}
              </div>

              <h3>{post.title}</h3>
              <p className="date">{post.dateFormatted}</p>
              <p className="excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="read-more">
                Weiterlesen →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
