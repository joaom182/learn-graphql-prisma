import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class QuestionScalarWhereWithAggregatesInput {
    AND?: QuestionScalarWhereWithAggregatesInput[] | undefined;
    OR?: QuestionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: QuestionScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    content?: StringWithAggregatesFilter | undefined;
}
