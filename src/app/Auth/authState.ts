import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../Interfaces";



export const initialAuthState: AuthState = {
    isLoggedIn: false,
    loading: false,
    Id: '',
    Name: '',
    Email: '',
    Password: '',
    user: null,
    errorMessage: null,
};



const userSliceState = createFeatureSelector<AuthState>('prof')

export const profile = createSelector(userSliceState, state => state.user)
const myId = createSelector(userSliceState, state => state.Id)


export const getSingleUser = createSelector(profile, myId, (state) => {
    return state
})


