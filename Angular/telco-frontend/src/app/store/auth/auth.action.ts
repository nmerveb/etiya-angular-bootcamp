import { createAction, props } from '@ngrx/store';
import { TokenUserModel } from 'src/app/models/tokenUserModel';

//her action bir unique keye ihtiyac duyar action id diyebiliriz.
//setleme islemi icin parametreye ihtiyac duyariz
export const setTokenUserModel = createAction(
  '[Auth] Set User Token Model',
  props<{ tokenUserModel: TokenUserModel }>() //inline interface yazdik, acton parametresini generic icine yazariz
);

//burada gonderilen actionlari reducer uzerinden yakalariz.
export const deleteTokenUserModel = createAction(
  '[Auth] Delete User Token Model'
);
