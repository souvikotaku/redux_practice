//STATE
const iState = {
    name: 'ramesh',
    wishes: ['eat','code'],
    // name2: 'suresh',
    // wishes: ['eat','code']
}


//ACTION
// export const action1=(name)=>{
//     return{
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }


//REDUCER
const reducer = (state=iState,action)=>{
    console.log(action)
    
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        // case 'CHANGE_NAME2':
        //     return {
        //         name2: action.payload
        //     }
        default:
           return state
    }

}

export default reducer;