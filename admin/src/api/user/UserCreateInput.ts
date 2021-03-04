export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  roles: Array<string>;
  username: string;
};
