import {Payer} from './Payer';

export class Payment {
    id: string;
    groupExpensesId: string;
    concept: string;
    paymentDate: Date;
    payer: Payer;
}
