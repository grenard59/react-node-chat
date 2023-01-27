import type { NextApiRequest, NextApiResponse } from 'next';
import { chain } from 'lodash';
import redis from '../../redis';
import { MessageType } from '../../typings';

type ErrorData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MessageType[] | ErrorData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const messagesRes: string[] = await redis.hvals('messages');
  const messages: MessageType[] = chain(messagesRes)
    .map((message) => JSON.parse(message))
    .orderBy('created_at', 'asc')
    .value();

  res.status(200).json(messages);
}
