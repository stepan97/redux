export interface MessageModel {
  receivedOn: string;
  fromUserID: number;
  toUserID: number;
  message: string;
  teamID?: number;
}
