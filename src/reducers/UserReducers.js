export const initialState = {
    avatar: '',
    nome: '',
    email: '',
    user_id: 0,
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar': return { ...state, avatar: action.payload.avatar }; break;
        case 'setNome': return { ...state, nome: action.payload.nome }; break;
        case 'setEmail': return { ...state, email: action.payload.email }; break;
        case 'setUserID': return { ...state, user_id: action.payload.user_id }; break;
        default:
            return state;
    }
}