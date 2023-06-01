import { IUserDataPayload, usersSlice } from "@/js/redux/reducer/userSlices";
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

    yield takeLatest(
        usersSlice.actions.register.toString(),
        registerUser,
    );
};


function* usersState() {

    const fetchRes: IUserDataPayload = yield async function () {
        const ret: IUserDataPayload = {
            res: null,
            data: null,
            err: "",
        }
        const url = process.env.NEXT_PUBLIC_DEV_URL

        try {

            const res: any = await axios.get(`${url}/api/usersActions`);
            ret.res = res;
            ret.data = _.get(res, 'data.message')


        } catch (e) {
            // ret.err = e?.message ?? e ?? errorMessages.fetchException;
        }

        return ret;

    }();

    yield put(usersSlice.actions.fetched(fetchRes));

};

function* registerUser() {

    const registering: IUserDataPayload = yield async function () {
        const ret: IUserDataPayload = {
            res: null,
            data: null,
            err: "",
        };
       
        try {
            const url = process.env.NEXT_PUBLIC_DEV_URL
            const formData = new FormData();

            formData.append("email", "email@gmail.com");
            formData.append("fname", "");
            formData.append("lname", "");
            formData.append("created_at", new Date().toISOString());

            const contents = {
                email: "email@gmail.com1", 
                fname: "jannah1",
                lname: "saja1",
                created_at: new Date().toISOString(),
            }
            const res: any = await axios.post(
                `${url}/api/usersActions`,
                contents,
            );
            console.log(`data di eksekusi ${contents.email}`);

            if (_.get(res, 'meta.status') !== 'success')
                throw (_.get(res, 'meta.message') || errorMessages.invalidResponseBody);

            ret.res = res;


        } catch (e) {
            // ret.err = _.get(e, 'errors.path[0]') ?? e?.message ?? e ?? errorMessages.postException;
        }

        return ret;
    }();

    yield put(usersSlice.actions.registered(registering));
}