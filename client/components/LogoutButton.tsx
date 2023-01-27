'use client';

import { signOut } from 'next-auth/react';
import ButtonComponent from './ButtonComponent';

const LogoutButton = () => (
  <ButtonComponent
    onClick={() => signOut()}
    icon={
      <svg
        className="w-4 h-4 mr-2 -ml-1"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    }
    label={'Sign out'}
  />
);

export default LogoutButton;
