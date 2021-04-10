// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(handler, {
    // SECRET_COOKIE_PASSWORD is an environment variable that does not get to
    // be tracked by git. Usually set in a .vercel file at the root of the
    // project
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'advanced-real-world-nextjs-app',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production',
    },
  });
}
