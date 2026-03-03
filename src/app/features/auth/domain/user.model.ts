export interface UserModel {
  id: string;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
  refreshToken: string;
}
