export interface IProfile {
  name: string;
  picture: string;
  email: string;
  status: 'Available' | 'Busy';
  friends: FriendsList[];
}

export type FriendsListType = {
  id: number;
  name: string;
  picture: string;
  latest_timestamp: string;
  lastChat: string;
};

export interface MessageType extends IProfile {
  id: string;
  message: string;
  created_at: number;
}
