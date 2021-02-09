// import './App.css';
import {connect} from 'react-redux';

const Comp1=(props)=>{
    <div>
        <h1>{`i got the name ${props.name} too`}</h1>
    </div>
}

const mapStateToProps=(state)=>{
  return{
      name: state.name
  }
}


export default connect(mapStateToProps)(Comp1);