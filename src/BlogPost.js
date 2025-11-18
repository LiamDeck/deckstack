import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState(null);

  // Scroll to top bei jedem Seitenwechsel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // User Session abrufen
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Blog Post laden
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

  // Kommentare laden - mit useCallback wrapped
  const loadComments = useCallback(async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_slug', slug)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Fehler beim Laden der Kommentare:', error);
    } else {
      setComments(data || []);
    }
  }, [slug]);

  // Kommentare laden
  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      alert('Bitte gib einen Kommentar ein');
      return;
    }

    setSubmitting(true);

    // Display Name aus user_metadata verwenden, Fallback auf E-Mail
    const displayName = user.user_metadata?.display_name || user.email;

    const commentData = {
      post_slug: slug,
      content: newComment,
      author_name: displayName,
      user_id: user.id
    };

    const { error } = await supabase
      .from('comments')
      .insert([commentData])
      .select();

    if (error) {
      console.error('Fehler beim Speichern des Kommentars:', error);
      alert('Kommentar konnte nicht gespeichert werden');
    } else {
      setNewComment('');
      loadComments();
    }

    setSubmitting(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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

      {/* Kommentar Sektion */}
      <section className="comments-section">
        <h2>Kommentare ({comments.length})</h2>

        {/* Conditional Rendering: Formular nur für eingeloggte Benutzer */}
        {user ? (
          <form onSubmit={handleSubmitComment} className="comment-form">
            <div className="logged-in-info">
              <span>Angemeldet als: <strong>{user.user_metadata?.display_name || user.email}</strong></span>
            </div>
            
            <textarea
              placeholder="Schreibe einen Kommentar..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="comment-textarea"
              rows="4"
              required
            />
            
            <button 
              type="submit" 
              className="comment-submit-btn"
              disabled={submitting}
            >
              {submitting ? 'Wird gesendet...' : 'Kommentar abschicken'}
            </button>
          </form>
        ) : (
          <div className="login-prompt">
            <p className="login-message">
              <svg className="login-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Du musst angemeldet sein, um einen Kommentar zu schreiben.
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="login-redirect-btn"
            >
              Zum Login
            </button>
          </div>
        )}

        {/* Kommentare anzeigen */}
        <div className="comments-list">
          {comments.length === 0 ? (
            <p className="no-comments">Noch keine Kommentare. Sei der Erste!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="comment">
                <div className="comment-header">
                  <span className="comment-author">{comment.author_name}</span>
                  <span className="comment-date">{formatDate(comment.created_at)}</span>
                </div>
                <p className="comment-content">{comment.content}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
