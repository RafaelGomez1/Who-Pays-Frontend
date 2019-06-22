import {User} from './User';

export class Payer {
    payer: User;
    quantity: number;
    debtor: User;

    constructor(debtor: User) {
        this.debtor = debtor;
    }
}
