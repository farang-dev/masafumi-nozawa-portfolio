import { NextApiRequest, NextApiResponse } from 'next';

const posts = [
  { id: 1, title: 'Post One', excerpt: 'Excerpt for post one' },
  { id: 2, title: 'Post Two', excerpt: 'Excerpt for post two' },
  { id: 3, title: 'Post Three', excerpt: 'Excerpt for post three' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts);
}
