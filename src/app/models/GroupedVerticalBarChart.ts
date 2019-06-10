import {ChartDataItem} from './ChartDataItem';

export class GroupedVerticalBarChart {
    name: string;
    series: ChartDataItem[];

    constructor(name: string) {
        this.name = name;
        this.series = [];
    }
}
