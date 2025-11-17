import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Was sind LLMs und wie funktionieren diese?",
      excerpt: "Large Language Models verstehen: Von Grundlagen über Training bis zur praktischen Anwendung...",
      date: "18. November 2025",
      slug: "was-sind-llms"
    },
    {
      id: 2,
      title: "Agentic AI und die Unterschiede zu AI Workflows",
      excerpt: "Autonome KI-Agenten vs. klassische Workflows: Wie unterscheiden sie sich und wann nutzt man was?",
      date: "18. November 2025",
      slug: "agentic-ai-vs-workflows"
    },
    {
      id: 3,
      title: "Wofür braucht man MCP Server?",
      excerpt: "Model Context Protocol: Die Brücke zwischen KI-Modellen und externen Datenquellen erklärt...",
      date: "18. November 2025",
      slug: "mcp-server-erklaert"
    }
  ];

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
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
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
