import {User} from './User';

export class Debtor {
    user: User;
    quantity: number;

    constructor(user: User) {
        this.user = user;
    }
}
