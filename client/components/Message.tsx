import classNames from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';

import 'dayjs/locale/fr'; // With a custom alias for the locale object

import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { MessageType } from '../typings';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

interface MessageProps {
  isSender: boolean;
  message: MessageType;
}

const Message = ({ message, isSender }: MessageProps) => (
  <div className={classNames('chat', !isSender ? 'chat-start' : 'chat-end')}>
    <div className="chat-image avatar">
      <div className="w-12 rounded-full">
        <Image
          alt="avatar"
          width={100}
          height={100}
          src={
            message.picture ||
            encodeURI(`https://ui-avatars.com/api/?name=${message.name}`)
          }
        />
      </div>
    </div>
    <div className={'chat-header flex gap-2 items-center'}>
      <p>{message.name}</p>
      <time className="text-xs opacity-50">
        {dayjs(message.created_at).locale('fr').format('LLL')}
      </time>
    </div>
    <div className="chat-bubble bg-slate-300 text-black">{message.message}</div>
  </div>
);

export default Message;
