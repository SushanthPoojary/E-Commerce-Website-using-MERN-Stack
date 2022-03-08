import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { productFetchFailure, productFetchStart, productFetchSuccess } from "./productRedux";
export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const getProducts = async (dispatch) => {
    dispatch(productFetchStart());

    try {
        const res = await publicRequest.post("/products");
        dispatch(productFetchSuccess(res.data));
    } catch (err) {
        dispatch(productFetchFailure());
    }
};