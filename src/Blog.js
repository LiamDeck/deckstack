import React from 'react';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Erster Blogeintrag",
      preview: "Dies ist eine kurze Vorschau des ersten spannenden Blogeintrags...",
      date: "10. November 2025",
    },
    {
      id: 2,
      title: "Zweiter Blogeintrag",
      preview: "Ein weiterer interessanter Beitrag mit wertvollen Inhalten und Tipps...",
      date: "8. November 2025",
    },
    {
      id: 3,
      title: "Dritter Blogeintrag",
      preview: "Entdecke in diesem Artikel neue Perspektiven und frische Ideen...",
      date: "5. November 2025",
    },
  ];

  return (
    <main className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Willkommen auf dem Blog!</h1>
      <div className="grid gap-8 max-w-4xl mx-auto">
        {blogPosts.map(post => (
          <div
            key={post.id}
            className="
                p-[2px] rounded-xl
                bg-gradient-to-br
                from-blue-500 via-green-400 to-purple-500
                transition-shadow
                hover:shadow-3xl hover:shadow-blue-400/40
            "
            >
            <article className="
                p-6 rounded-[10px] bg-white
                transition-shadow
                hover:shadow-xl
            ">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.preview}</p>
                <p className="text-sm text-gray-500">Veröffentlicht am {post.date}</p>
            </article>
            </div>

        ))}
      </div>
    </main>
  );
}

export default Blog;
