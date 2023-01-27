import type { NextApiRequest, NextApiResponse } from 'next';
import { serverPusher } from '../../pusher';
import redis from '../../redis';

type Data = {
  message: string;
};
type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message } = req.body;

  const item = { ...message, created_at: Date.now() };

  redis.hset('messages', message.id, JSON.stringify(item));

  serverPusher.trigger('messaging-app', 'new-message', item);

  res.status(200).json({ message: item });
}
