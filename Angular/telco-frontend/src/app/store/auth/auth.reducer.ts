import { createReducer, on } from '@ngrx/store';
import { setTokenUserModel, deleteTokenUserModel } from './auth.action';
import { AuthStoreState, initialAuthStoreState } from './auth.state';

//state'i tutar ve icindeki degisiklikleri gunceller
//baslangic degeri ister
export const authReducer = createReducer<AuthStoreState>(
  initialAuthStoreState,
  on(
    setTokenUserModel, //yakalamak istedigimiz action
    (currentState, action) => {
      //yakalanilan action payloadi ile islem yapip storedaki state'i gunceller
      //referans degistirmek gerektigi icin objeyi guncelleriz.
      return {
        ...currentState, //guncelleme islemi yapmak istedigimizde bu sekilde eski bilgileri de ekleriz.
        tokenUserModel: action.tokenUserModel,
      };
      //return {...currentState, roles:[..currentState.roles, action.role]} //diyerek diziyi guncelleriz. addrole gibi
    }
  ),
  on(deleteTokenUserModel, (currentState) => {
    return {
      ...currentState,
      tokenUserModel: null,
    };
  })
); //bu degerler store icindeki state'ten alinir
