import {Payer} from './Payer';
import {Debtor} from './Debtor';
import {Category} from './Category';
import {Payment} from './Payment';

export class GroupExpenses {
    id: string;
    concept: string;
    totalQuantity: number;
    totalDebt: number;
    totalPaid: number;
    payers: Payer[];
    debtors: Debtor[];
    date: Date;
    category: Category;
    status: Status;
    payments: Payment[];

    constructor() {
        this.date = new Date();
        this.status = Status.NOT_PAID;
    }
}
