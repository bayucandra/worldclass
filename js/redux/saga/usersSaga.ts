import { IUserDataPayload, IUserRegisterPayload, IUserRegisteredPayload, usersSlice } from "@/js/redux/reducer/userSlices";
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
             ret.err = e;
        }

        return ret;

    }();

    yield put(usersSlice.actions.fetched(fetchRes));

};

function* registerUser(action: PayloadAction<IUserRegisterPayload>) {

    const registering: IUserRegisteredPayload = yield async function () {
        const ret: IUserRegisteredPayload = {
            email: action.payload.email,
            name: action.payload.name,
            level: action.payload.level,
            res: null,
            err: undefined,
        };
       
        try {
            const url = process.env.NEXT_PUBLIC_DEV_URL
            const formData = new FormData();

            // formData.append("email", "email@gmail.com");
            // formData.append("fname", "");
            // formData.append("lname", "");
            // formData.append("created_at", new Date().toISOString());

            const contents = {
                email: action.payload.email, 
                googleName: action.payload.name,
                level: action.payload.level,
                fname: "testname",
                lname: "test last",
                created_at: new Date().toISOString(),
            }
            const res: any = await axios.post(
                `${url}/api/usersActions`,
                contents,
            );
            // console.log(`data di eksekusi ${contents.email}`);

            // if (_.get(res, 'meta.status') !== 'success')
            //     throw (_.get(res, 'meta.message') || errorMessages.invalidResponseBody);
            

            ret.res = res;


        } catch (e) {
        
            ret.err = e;
        }

        return ret;
    }();

    yield put(usersSlice.actions.registered(registering));
}