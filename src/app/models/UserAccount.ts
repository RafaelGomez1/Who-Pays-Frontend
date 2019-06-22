import {Group} from './Group';

export class UserAccount {
    username: string;
    password: string;
    groupsList: Group[] = [];
}
