import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

interface Post {
  id: number;
  title: string;
  excerpt: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <h2 className='text-3xl font-bold mb-4'>Blog</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {posts.map((post) => (
          <div key={post.id} className='bg-white p-4 rounded shadow'>
            <h3 className='text-xl font-bold'>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
