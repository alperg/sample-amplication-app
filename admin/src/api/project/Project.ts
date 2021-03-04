import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type Project = {
  createdAt: Date;
  customField: string | null;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string | null;
  owner: UserWhereUniqueInput;
  startDate: Date | null;
  updatedAt: Date;
};
