import {TicketInfoModel} from './ticket-info-model';

export class QrModel {
    constructor(
        public PerformanceName: string,
        public PerformanceId: number,
        public PerformanceDate:Date,
        public Tickets:TicketInfoModel[]
    ) { }
}