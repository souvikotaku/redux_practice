const wishReducer = (state=[],action)=>{
    console.log(action)
    
    switch(action.type){
        case 'ADD_WISH':
            return [
                ...state,
                action.payload
            ]
                
            
        // case 'CHANGE_NAME2':
        //     return {
        //         name2: action.payload
        //     }
        default:
           return state
    }

}

export default wishReducer;