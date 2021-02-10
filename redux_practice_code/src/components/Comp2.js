// import './App.css';
import {connect} from 'react-redux';


function Comp2(props){

    return(
        <div>
        <h1>{`i got the name ${props.name} too`}</h1>

        
    </div>
    )
    
    
}

const mapStateToProps=(state)=>{
  return{
      name: state.name
  }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         changeName: (name)=>{
//             dispatch(
//                 action1(name)
//             )
//         }
//     }
// }


export default connect(mapStateToProps)(Comp2);