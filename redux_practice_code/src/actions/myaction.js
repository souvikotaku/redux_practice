// export const action1=(name)=>{
//     return{
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }

export const action1=()=>{

    //by normal promise
    // return(dispatch)=>{

    //     fetch('https://jsonplaceholder.typicode.com/users#')
    //     .then(
    //        res=>res.json()
    //     )
    //     .then(
    //         res2=>{
    //             dispatch({
    //                 type: 'CHANGE_NAME',
    //                 payload: res2[1].name
    //             })
                
    //         }
    //     )

    // }

    

    //by async/await

    return async(dispatch)=>{

        const data = await fetch('https://jsonplaceholder.typicode.com/users#')
        
          const res2 = await data.json()
        
        
                dispatch({
                    type: 'CHANGE_NAME',
                    payload: res2[1].name
                })
                
       

    }
}

export const action2=(wish)=>{
    return{
       
            type: 'ADD_WISH',
            payload: wish
        
    }
}

export const action3=(name2)=>{
    return{
       
            type: 'ADD_NAME',
            payload: name2
        
    }
}

