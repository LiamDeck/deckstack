import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        setPost(text);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="loading">Lädt...</div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="back-button">
        ← Zurück zum Blog
      </Link>
      <article>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post}
        </ReactMarkdown>
      </article>
    </div>
  );
}

export default BlogPost;
