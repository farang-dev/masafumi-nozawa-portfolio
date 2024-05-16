import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one' },
  { id: 2, title: 'Project Two', description: 'Description for project two' },
  { id: 3, title: 'Project Three', description: 'Description for project three' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
