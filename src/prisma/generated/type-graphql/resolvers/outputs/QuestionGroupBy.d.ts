import { QuestionAvgAggregate } from "../outputs/QuestionAvgAggregate";
import { QuestionCountAggregate } from "../outputs/QuestionCountAggregate";
import { QuestionMaxAggregate } from "../outputs/QuestionMaxAggregate";
import { QuestionMinAggregate } from "../outputs/QuestionMinAggregate";
import { QuestionSumAggregate } from "../outputs/QuestionSumAggregate";
export declare class QuestionGroupBy {
    id: number;
    content: string;
    _count: QuestionCountAggregate | null;
    _avg: QuestionAvgAggregate | null;
    _sum: QuestionSumAggregate | null;
    _min: QuestionMinAggregate | null;
    _max: QuestionMaxAggregate | null;
}
