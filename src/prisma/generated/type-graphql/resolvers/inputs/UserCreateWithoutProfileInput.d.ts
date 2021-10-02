import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateWithoutProfileInput {
    email: string;
    name?: string | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
