import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProfileInput } from "../inputs/UserUpdateOneRequiredWithoutProfileInput";
export declare class ProfileUpdateInput {
    bio?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutProfileInput | undefined;
}
