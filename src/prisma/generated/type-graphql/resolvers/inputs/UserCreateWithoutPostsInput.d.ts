import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
export declare class UserCreateWithoutPostsInput {
    email: string;
    name?: string | undefined;
    password?: string | undefined;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
}
