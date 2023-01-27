import { getProviders } from 'next-auth/react';
import SignInComponent from './SignInComponent';

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="h-[95vh] grid justify-center items-center">
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
