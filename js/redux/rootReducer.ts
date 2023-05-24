import { combineReducers } from '@reduxjs/toolkit';
import { AnyAction, Reducer, ReducersMapObject } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { users } from '@/js/redux/reducer/userSlices';

// export default combineReducers({
// 	counterSlice,
	
//   })

const combinedReducer = combineReducers({
	users,
});

export const reducer: Reducer<any, AnyAction> | ReducersMapObject<any, AnyAction> = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
	switch (action.type) {
		case HYDRATE:
			if (action.payload.app === 'init') delete action.payload.app;
			if (action.payload.page === 'init') delete action.payload.page;
			const nextState = {
				...state, // use previous state
				...action.payload, // apply delta from hydration
			};
			return nextState;
		default:
			return combinedReducer(state, action);
	}
};