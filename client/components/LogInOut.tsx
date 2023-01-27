import { useSession } from 'next-auth/react';

import LogoutButton from '../components/LogoutButton';

const LogInOut = ({
  session
}: {
  session: Awaited<ReturnType<typeof useSession>>;
}) => {
  return (
    <div>
      {session?.data?.user && (
        <div className="flex flex-row items-center">
          <div className="flex flex-col w-48">
            <p className="text-purple-200">Logged in as :</p>
            <p className="font-bold text-purple-400">
              {session.data.user.name}
            </p>
          </div>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default LogInOut;
