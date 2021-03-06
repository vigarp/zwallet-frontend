const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchTransfer = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POST_TRANSFER_REQUEST':
            return {...state, loading: true};
        case 'POST_TRANSFER_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'POST_TRANSFER_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchTransfer