// import './App.css';
import {connect} from 'react-redux';
import Comp2 from './Comp2';



function Comp1(props){

    return(
        <div>
        <h1>{`i got the name ${props.name2} too`}</h1>
        <Comp2/>
       
    </div>
    )
    
    
}

const mapStateToProps=(state)=>{
  return{
      name2: state.name2
  }
}



export default connect(mapStateToProps)(Comp1);