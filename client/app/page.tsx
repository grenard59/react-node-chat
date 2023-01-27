import { unstable_getServerSession } from 'next-auth';

import Discution from '../components/Discution';
import Header from './Header';
import Providers from './providers';

const Home = async () => {
  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <Header />
      <main className="flex justify-center flex-col ">
        {session ? (
          <Discution />
        ) : (
          <div className="flex w-full h-[95vh] justify-center items-center">
            {`You are not connected. Please click on the "Sign in" button`}
          </div>
        )}
      </main>
    </Providers>
  );
};

export default Home;
