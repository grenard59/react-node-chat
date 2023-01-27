'use client';

import { signIn } from 'next-auth/react';

const SignInButton = ({}) => {
  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
      Sign in
    </button>
  );
};

export default SignInButton;