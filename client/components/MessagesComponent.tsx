import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { MessageType } from '../typings';
import Message from './Message';

const MessagesComponent = ({ messages }: { messages: MessageType[] }) => {
  const chatContainer = useRef<null | HTMLDivElement>(null);
  const session = useSession();

  const scrollToMyRef = () => {
    if (chatContainer?.current) {
      chatContainer.current.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'nearest'
      });
    }
  };

  useEffect(() => {
    scrollToMyRef();
  }, [messages]);

  return (
    <div ref={chatContainer}>
      {messages?.map((message: MessageType) => {
        return (
          <Message
            key={`${message.id}-${message.created_at}`}
            isSender={message.email === session.data?.user?.email}
            message={message}
          />
        );
      })}
    </div>
  );
};

export default MessagesComponent;
