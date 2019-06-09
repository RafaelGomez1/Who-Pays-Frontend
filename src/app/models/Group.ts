import {User} from './User';
import {GroupExpenses} from './GroupExpenses';

export class Group {
    id: string;
    groupName: string;
    creationDate: Date;
    members: User[];
    admins: User[];
    groupExpenses: GroupExpenses[];
}
