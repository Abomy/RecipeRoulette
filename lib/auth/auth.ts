import { getSession, Session } from '@auth0/nextjs-auth0';
import Iron from '@hapi/iron';
import prisma from '@lib/prisma';
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies';

const TOKEN_SECRET =
  process.env.TOKEN_SECRET || 'cmewrtzMs7TwXgw&SXqZk15uQ3z@Qfja';

export async function setLoginSession(session) {
  const createdAt = Date.now();

  // Create a session object with a max age that we can validate later
  const obj = { ...session, createdAt, maxAge: MAX_AGE };
  const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults);

  return setTokenCookie(token);
}

export async function getLoginSession(req) {
  const token = getTokenCookie(req);

  if (!token) return;

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (Date.now() > expiresAt) {
    throw new Error('Session expired');
  }

  return session;
}

async function getAccount(sub: string) {
  return await prisma.account.findFirst({
    where: { auth0: sub },
    select: { id: true },
  });
}

export async function getAuthorizedUser(req, res): Promise<Session> {
  const session = getSession(req, res);
  const record = await getAccount(session.user.sub);
  session.user.id = record.id;
  return session;
}
