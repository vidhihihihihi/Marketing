import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import FooterSection from '../components/FooterSection';
import './Blogs.css';

// Import images
import blogImage1 from '../components/Assets/casestudy1.jpg';
import blogImage2 from '../components/Assets/casestudy2.jpeg';
import blogImage3 from '../components/Assets/casestudy3.jpg';
// Import more blog images as needed

interface Blog {
  id: string;
  image: string;
  title: string;
  excerpt: string;
}

const blogs: Blog[] = [
  {
    id: '1',
    image: blogImage1,
    title: 'The Future of Digital Marketing',
    excerpt: 'As technology continues to evolve, the landscape of digital marketing is changing rapidly. In this blog, we explore the emerging trends...'
  },
  {
    id: '2',
    image: blogImage2,
    title: 'SEO Strategies for 2024',
    excerpt: 'Search engine algorithms are constantly updating. Stay ahead of the curve with these effective SEO strategies for the coming year...'
  },
  {
    id: '3',
    image: blogImage3,
    title: 'The Power of Social Media Influencers',
    excerpt: 'Influencer marketing has become a cornerstone of many successful campaigns. Learn how to leverage influencers to boost your brand...'
  },
  // Add more blog entries as needed
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-page">
      <MainHeader />
      <div className="blogs-banner">
        <h1>Our Blog</h1>
        <p>Insights, Tips, and Trends in Digital Marketing</p>
      </div>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-item">
            <div className="blog-image-container">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <FooterSection />
    </div>
  );
};

export default Blogs;