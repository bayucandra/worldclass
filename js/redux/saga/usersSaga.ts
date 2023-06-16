import { IUserDataPayload, IUserRegisterPayload, IUserRegisteredPayload, usersSlice } from "@/js/redux/reducer/userSlices";
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import { PayloadAction } from "@reduxjs/toolkit";
import { errorMessages } from "@/lib/errorMessage";


export function* usersSaga() {
    yield takeLatest(
        usersSlice.actions.fetchUserData.toString(),
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
            const userMail = localStorage.getItem('userMail');
            const res: any = await axios.post(`${url}/api/fetchuser?userMail=${userMail}`,);
            ret.res = res;
            ret.data = _.get(res, 'data.message')


        } catch (e) {
             ret.err = e;
        }

        return ret;

    }();

    yield put(usersSlice.actions.fetchedUserData(fetchRes));

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

            const contents = {
                email: action.payload.email, 
                googleName: action.payload.name,
                level: action.payload.level,
                fname: "",
                lname: "",
                created_at: new Date().toISOString(),
            }
            const res: any = await axios.post(
                `${url}/api/usersActions`,
                contents,
            );

            ret.res = res;


        } catch (e) {
        
            ret.err = e;
        }

        return ret;
    }();

    yield put(usersSlice.actions.registered(registering));
}