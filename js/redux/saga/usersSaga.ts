import { IGroupAboutFetchedPayload, usersSlice } from "@/js/redux/reducer/userSlices";
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import { PayloadAction } from "@reduxjs/toolkit";

export function* usersSaga() {
    yield takeLatest(
        usersSlice.actions.fetch.toString(),
        usersState,
       
    );
};



    function* usersState(action: PayloadAction<{group_id: number}>) {
        const fetchRes: IGroupAboutFetchedPayload = yield async function() {
            const ret: IGroupAboutFetchedPayload = {
                res: null,
                data: null,
                err: undefined,
            }
    
            try {
                const res: any = await axios.get('https://dummyjson.com/products/1');
                ret.res = res;
                ret.data = _.get(res, 'data')
            } catch(e) {
               // ret.err = e?.message ?? e ?? errorMessages.fetchException;
            }
    
            return ret;
    
        }();
    
        yield put(usersSlice.actions.fetched(fetchRes));
    
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
            
}