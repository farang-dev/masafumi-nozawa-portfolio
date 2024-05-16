import { ReactNode } from 'react';
import Nav from './Nav';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      <main className='container mx-auto p-4'>{children}</main>
    </div>
  );
}
