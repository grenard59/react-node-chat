'use client';

import { map } from 'lodash';
import { Formik, Form } from 'formik';

import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';
import InputForm from '../../../components/InputLabel';

type SignInComponentProps = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

type UserCredentials = {
  email?: string;
  password?: string;
};

const SignInComponent = ({ providers }: SignInComponentProps) => {
  return (
    <div className="flex gap-2 flex-col ">
      <div className="flex flex-col gap-2">
        <Formik
          initialValues={{ email: '', name: '' }}
          validate={(values) => {
            const errors: UserCredentials = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={async ({ email, name }, { setSubmitting }) => {
            console.log('submitting');

            await signIn('credentials', {
              callbackUrl: window.location.origin,
              email,
              name
            });
            setSubmitting(false);
          }}>
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <InputForm label={'Email'} type="email" name="email" />
              <InputForm label={'Name'} type="text" name="name" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white justify-center bg-gradient-to-br disabled:cursor-not-allowed from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <button
          className="text-white justify-center bg-gradient-to-br  from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          onClick={() =>
            signIn('facebook', {
              callbackUrl: window.location.origin
            })
          }>
          Sign in with Facebook
        </button>
      </div>
      {map(providers, (provider) => (
        <div key={provider.id} className="flex w-full"></div>
      ))}
    </div>
  );
};

export default SignInComponent;
