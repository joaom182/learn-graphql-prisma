import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QuestionWhereInput {
    AND?: QuestionWhereInput[] | undefined;
    OR?: QuestionWhereInput[] | undefined;
    NOT?: QuestionWhereInput[] | undefined;
    id?: IntFilter | undefined;
    content?: StringFilter | undefined;
}
