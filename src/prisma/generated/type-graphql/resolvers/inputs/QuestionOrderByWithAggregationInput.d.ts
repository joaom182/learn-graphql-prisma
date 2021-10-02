import { QuestionAvgOrderByAggregateInput } from "../inputs/QuestionAvgOrderByAggregateInput";
import { QuestionCountOrderByAggregateInput } from "../inputs/QuestionCountOrderByAggregateInput";
import { QuestionMaxOrderByAggregateInput } from "../inputs/QuestionMaxOrderByAggregateInput";
import { QuestionMinOrderByAggregateInput } from "../inputs/QuestionMinOrderByAggregateInput";
import { QuestionSumOrderByAggregateInput } from "../inputs/QuestionSumOrderByAggregateInput";
export declare class QuestionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    _count?: QuestionCountOrderByAggregateInput | undefined;
    _avg?: QuestionAvgOrderByAggregateInput | undefined;
    _max?: QuestionMaxOrderByAggregateInput | undefined;
    _min?: QuestionMinOrderByAggregateInput | undefined;
    _sum?: QuestionSumOrderByAggregateInput | undefined;
}
