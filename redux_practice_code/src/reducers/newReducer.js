



const newReducer = (state='',action)=>{
    console.log(action)
    
    switch(action.type){
        case 'ADD_NAME':

        return action.payload
            // return {
            //     ...state,
            //     name: action.payload
            // }
        // case 'CHANGE_NAME2':
        //     return {
        //         name2: action.payload
        //     }
        default:
           return state
    }

}

export default newReducer;