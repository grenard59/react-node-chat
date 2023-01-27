import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

console.log(process.env);

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true
});

export const clPusher = new ClientPusher('2720a8a69de1d91c12b7', {
  cluster: 'eu',
  forceTLS: true
});
