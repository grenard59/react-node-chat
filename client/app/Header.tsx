'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import ButtonComponent from '../components/ButtonComponent';

import LogInOut from '../components/LogInOut';

const Header = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <header>
      <nav className="bg-black px-2 sm:px-4 py-2.5 rounded dark:bg-gray-700  border-b border-gray-700 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My logo
          </p>
          {session?.data?.user ? (
            <LogInOut session={session} />
          ) : (
            <ButtonComponent
              label={'Sign in'}
              onClick={() => router.push('/auth/signin')}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
