import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
export declare class UserCreateWithoutPostsInput {
    email: string;
    name?: string | undefined;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
}
