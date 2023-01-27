import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import { v4 as uuid } from 'uuid';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        name: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        email: { label: 'name', type: 'email', placeholder: 'jsmith@mail.com' }
      },
      async authorize(credentials, _req) {
        console.log(credentials);

        // Add logic here to look up the user from the credentials supplied
        const user = {
          id: uuid(),
          ...credentials
        };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ]
};

export default NextAuth(authOptions);
