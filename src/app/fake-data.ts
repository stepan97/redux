import { ChatUserModel } from './models/chat-user.model';

export const fakeData: ChatUserModel[] = [
  {
    isTeam: true,
    teamID: 3,
    teamName: 'Als Team',
    isConnected: true,
    userID: null,
    userName: null,
    firstName: null,
    lastName: null,
    avatarFileName: null,
    avatarVersion: null,
    messages: [
      {
        receivedOn: '2020 - 02 - 07T07: 32: 28.947',
        fromUserID: 1,
        toUserID: 2,
        message: 'hi'
      },
      {
        receivedOn: '2020 - 02 - 08T07: 32: 28.947',
        fromUserID: 2,
        toUserID: 1,
        message: 'hello'
      },
      {
        receivedOn: '2020 - 02 - 09T07: 32: 28.947',
        fromUserID: 1,
        toUserID: 2,
        message: 'how are you ?'
      },
      {
        receivedOn: '2020 - 02 - 09T07: 37: 28.947',
        fromUserID: 1,
        toUserID: 2,
        message: 'everything okay ?'
      },
      {
        receivedOn: '2020 - 02 - 09T08: 37: 28.947',
        fromUserID: 2,
        toUserID: 1,
        message: 'yep!'
      }
    ]
  },
  {
    isTeam: false,
    teamID: 3,
    teamName: null,
    isConnected: true,
    userID: 1,
    userName: 'sasun',
    firstName: 'Sasun',
    lastName: 'Stepanyan',
    avatarFileName: null,
    avatarVersion: 1,
    messages: null
  },
  {
    isTeam: false,
    teamID: 3,
    teamName: null,
    isConnected: true,
    userID: 2,
    userName: 'stepan',
    firstName: 'Stepan',
    lastName: 'Nikoghosyan',
    avatarFileName: null,
    avatarVersion: 1,
    messages: null
  }
];
