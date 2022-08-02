export const initialState = {
    waitingList : [],
    classes : [{'name' : 'yoga','members' : 20,'max' : 100,'waiting' : 0},{'name' : 'gym','members' : 99,'max' : 100,'waiting' : 0},{'name' : 'yoga','members' : 100,'max' : 100,'waiting' : 0}],
    user : '',
    currentClass : '',
    user_class : []
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_WAITING_LIST':
            return {
                ...state,
                waitingList: action.payload,
            };
        case 'REMOVE_WAITING_LIST':
            return {
                ...state,
                waitingList: state.waitingList.filter(item => item !== action.payload)
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_CLASSES':
            return {
                ...state,
                classes: action.classes
            };

        case 'SET_CURRENTCLASS':
            return {
                ...state,
                currentClass: action.currentClass

            };

        case "SET_USER_CLASS":
            return {
                ...state,
                user_class: action.user_class
            }

    
        default:
            return state;
    }
}

export default reducer