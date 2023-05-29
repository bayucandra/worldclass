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


// function* usersState(action: PayloadAction<{group_id: number}>) {

        
//     const fetchRes: IUsersPayload = yield async function() {
    

//             let dev = process.env.NODE_ENV !== 'production';
//             let { DEV_URL, PROD_URL } = process.env;
        
//             // request posts from api
//             let response = await fetch(`http://localhost:3000/api/actions`);
//             // extract the data
//             let data = await response.json();
        
//             return {
//                 props: {
//                     posts: data['users'],
//                 },
//             };
            
          


//     }();

//     yield put(usersSlice.actions.fetched(fetchRes));

// // fetch('https://dummyjson.com/products/1')
// // .then(res => res.json())
// // .then(json => console.log(json))
        
// }


    function* usersState(action: PayloadAction<{group_id: number}>) {

        
        const fetchRes: IUsersPayload = yield async function() {
            const ret: IUsersPayload = {
                res: null,
                data: null,
                err: "",
            }
            const url = process.env.MONGODB_URI
    
            try {
                
                const res: any = await axios.get('http://localhost:3000/api/actions');
                ret.res = res;
                ret.data = _.get(res, 'data.message')


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