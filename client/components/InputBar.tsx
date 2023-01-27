'use client';
import useSWR from 'swr';
import { v4 as uuid } from 'uuid';
import { FormEvent, useState } from 'react';
import { Send } from 'react-feather';

import { MessageType } from '../typings';
import { fetcher } from '../utils/fetcher';
import { useSession } from 'next-auth/react';

const InputBar = ({}: {}) => {
  const [input, setInput] = useState('');
  const session = useSession();

  const {
    data: messages,
    mutate,
    isLoading
  } = useSWR('/api/getMessages', fetcher);

  const onSubmitMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input || !session.data?.user) {
      return;
    }
    const { user } = session.data;
    const message: MessageType = {
      id: uuid(),
      name: user.name!,
      picture: user.image!,
      email: user.email!,
      status: 'Available',
      friends: [],
      message: input,
      created_at: Date.now()
    };

    const sendMessage = async () => {
      await fetch('/api/submitMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message
        })
      });
      return [...messages, messages];
    };

    await mutate(sendMessage, {
      optimisticData: messages,
      rollbackOnError: true
    });

    setInput('');
  };

  return (
    <form onSubmit={onSubmitMessage}>
      <div className="flex flex-row gap-2 ml-3 mr-3">
        <input
          type="text"
          value={input}
          disabled={!session}
          aria-label="Type your message here"
          placeholder="Type your message here"
          id="small-input"
          onChange={(e) => setInput(e.target.value)}
          className="block disabled:cursor-not-allowed w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-200 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={!session || !input || isLoading}
          className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 disabled:cursor-not-allowed  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Send />
        </button>
      </div>
    </form>
  );
};

export default InputBar;
