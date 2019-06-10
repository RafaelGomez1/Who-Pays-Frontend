export class ChartDataItem {
    name: string;
    value: number;

    constructor(username: string, debt: number) {
        this.name = username;
        this.value = debt;
    }
}
