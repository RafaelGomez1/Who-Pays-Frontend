import {Assets} from './Assets';
import {Debt} from './Debt';

export class UserBalance {
    username: string;
    totalDebt: number;
    totalActive: number;
    assets: Assets[];
    debts: Debt[];
}
