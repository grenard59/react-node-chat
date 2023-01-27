'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import { MessageType } from '../typings';
import { fetcher } from '../utils/fetcher';
import MessagesComponent from './MessagesComponent';

const MessagesList = ({
  startUpMessages
}: {
  startUpMessages: MessageType[];
}) => {
  const { data: messages, mutate } = useSWR<MessageType[], boolean>(
    '/api/getMessages',
    fetcher
  );

  useEffect(() => {
    // const channel = clPusher.subscribe('messaging-app');
    // channel.bind('new-message', async (message: MessageType) => {
    //   if (messages?.find((item) => item.id === message.id)) {
    //     console.log('same message');
    //     return;
    //   }
    //   console.log('new message');
    //   mutate(fetcher, {
    //     optimisticData: [message, messages],
    //     rollbackOnError: true
    //   });
    // });
    // scrollToMyRef();
    // console.log(messages);

    return () => {
      // channel.unbind_all();
      // channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <div className="flex w-full gap-5 flex-col">
      <MessagesComponent messages={messages || startUpMessages} />
    </div>
  );
};

export default MessagesList;
