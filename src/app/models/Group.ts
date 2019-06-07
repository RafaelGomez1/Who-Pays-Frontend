import {User} from './User';
import {GroupExpenses} from './GroupExpenses';

export class Group {
    idString: string;
    groupName: string;
    creationDate: Date;
    membersList: User[];
    admins: User[];
    groupExpenses: GroupExpenses[];
}
