// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const editPicRequest = () => {
    return {
        type: 'EDIT_PIC_REQUEST'
    }
}
export const editPicResponse = (data) => {
    return {
        type: 'EDIT_PIC_RESPONSE',
        payload: data
    }
}
export const editPicError = (error) => {
    return {
        type: 'EDIT_PIC_ERROR',
        payload: error
    }
}

export const editPic = (formDataPic, setLoading) => {
    return (dispatch) => {
        dispatch(editPicRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/picture`,
            data: formDataPic,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            setLoading(false)
            const resultEditPic = res.data?.message
            alert(resultEditPic)
            dispatch(editPicResponse(resultEditPic))
        })
        .catch((err) => {
            setLoading(false)
            const message = err.message
            dispatch(editPicError(message))
        })
    }
}