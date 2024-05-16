import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-white font-bold'>Masafumi Nozawa</h1>
        <div>
          <Link href='/about'><a className='text-white mr-4'>About</a></Link>
          <Link href='/services'><a className='text-white mr-4'>Services</a></Link>
          <Link href='/work'><a className='text-white mr-4'>Work</a></Link>
          <Link href='/blog'><a className='text-white mr-4'>Blog</a></Link>
          <Link href='/contact'><a className='text-white'>Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
