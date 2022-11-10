import { TokenUserModel } from 'src/app/models/tokenUserModel';

export interface AuthStoreState {
  tokenUserModel: TokenUserModel | null;
}

//initial deger tutmak gerekli

export const initialAuthStoreState: AuthStoreState = {
  tokenUserModel: null,
};
