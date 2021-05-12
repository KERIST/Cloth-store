import { all, call } from 'redux-saga/effects';

import { sectionsSagas } from './sections/sections.sagas';
import { userSagas } from './user/user.sagas';

export function* rootSagas() {
  yield all([
    call(sectionsSagas),
    call(userSagas)
  ])
}