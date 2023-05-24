import { usersSaga } from "@/js/redux/saga/usersSaga";
import { all } from "redux-saga/effects";


export function* rootSaga() {
    yield all([
        usersSaga()
    ]);
}