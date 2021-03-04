import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  customField?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
};
