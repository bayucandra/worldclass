import { IUsersPayload, usersSlice } from "@/js/redux/reducer/userSlices";
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import { PayloadAction } from "@reduxjs/toolkit";
import { errorMessages } from "@/lib/errorMessage";


export function* usersSaga() {
    yield takeLatest(
        usersSlice.actions.fetching.toString(),
        usersState,

    );
};


function* usersState(action: PayloadAction<{ group_id: number }>) {


    const fetchRes: IUsersPayload = yield async function () {
        const ret: IUsersPayload = {
            res: null,
            data: null,
            err: "",
        }
        const url = process.env.NEXT_PUBLIC_DEV_URL

        try { process.env.DEV_URL;

            const res: any = await axios.get(`${url}/api/actions`);
            ret.res = res;
            ret.data = _.get(res, 'data.message')


        } catch (e) {
            // ret.err = e?.message ?? e ?? errorMessages.fetchException;
        }

        return ret;

    }();

    yield put(usersSlice.actions.fetched(fetchRes));

    // fetch('https://dummyjson.com/products/1')
    // .then(res => res.json())
    // .then(json => console.log(json))

}