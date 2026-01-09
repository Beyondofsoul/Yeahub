export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  birthday: string;
  address: string;
  avatarUrl: string;
  updatedAt: string;
  createdAt: string;
  userRoles: Array<{
    id: number;
    name: string;
    permissions: Array<{
      id: number;
      name: string;
    }>;
  }>;
  isVerified: boolean;
}
export interface LoginResponse {
  access_token: string;
  user: User;
}
export interface LoginRequest {
  username: string;
  password: string;
}
export interface AuthState {
  token: string | null;
  user: User | null;
}
