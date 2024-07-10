import React from 'react';
import './WriteForUsExample.css';

interface BlogPost {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    image: '/path/to/blog1-image.jpg',
    title: 'Blog Post 1 Title',
    excerpt: 'This is the first few lines of blog post 1. It gives a brief overview of the content...',
    url: '/blog/post-1'
  },
  {
    id: '2',
    image: '/path/to/blog2-image.jpg',
    title: 'Blog Post 2 Title',
    excerpt: 'Here are the opening lines of blog post 2. It introduces the main topic discussed...',
    url: '/blog/post-2'
  },
  {
    id: '3',
    image: '/path/to/blog3-image.jpg',
    title: 'Blog Post 3 Title',
    excerpt: 'Blog post 3 begins with these lines. They set the stage for the rest of the article...',
    url: '/blog/post-3'
  }
];

const TopExamples: React.FC = () => {
  return (
    <section className="top-examples">
      <h2>Read through our top examples</h2>
      <div className="blog-posts-container">
        {blogPosts.map((post) => (
          <a key={post.id} href={post.url} className="blog-post-card">
            <img src={post.image} alt={post.title} className="blog-post-image" />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TopExamples;