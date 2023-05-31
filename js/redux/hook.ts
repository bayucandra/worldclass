import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { select } from 'redux-saga/effects';
import { AppDispatch, RootState } from './store'

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function* appSelect<TSelected>( selector: (state: RootState) => TSelected, ): Generator<any, TSelected, TSelected> { return yield select(selector); }
