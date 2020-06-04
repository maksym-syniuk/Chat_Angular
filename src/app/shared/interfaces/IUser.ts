import { IMessage } from './IMessage';

export interface IUser {
    id: number;
    name: string;
    surname?: string;
    online: boolean;
    imagePath: string;
    messages: IMessage[];
}
