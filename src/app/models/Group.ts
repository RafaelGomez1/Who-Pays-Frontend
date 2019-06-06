import {User} from './User';
import {GroupExpenses} from './GroupExpenses';

export class Group {
    groupId: string;
    groupName: string;
    creationDate: Date;
    membersList: User[];
    admins: User[];
    groupExpenses: GroupExpenses[];
}
