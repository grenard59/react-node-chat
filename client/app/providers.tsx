'use client';

import type { DefaultSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

type ProviersProps = {
  children: React.ReactNode;
  session: DefaultSession | null;
};

const Providers = ({ children, session }: ProviersProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
