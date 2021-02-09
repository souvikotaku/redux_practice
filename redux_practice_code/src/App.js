
import './App.css';
import {connect} from 'react-redux';
// import Comp1 from './components/Comp1'
import {action1,action2} from './actions/myaction';

function App(props) {

  console.log(props)
  return (
    <div className="App">
     <h1 id='header1'>{`I am an app component and i got the name ${props.name}`} </h1><br/>
     <h1 id='header2' ></h1>
     {/* <Comp1/> */}
     {props.wish.map(wish=>{
       return <h1 key={Math.random()}>{wish}</h1>
     })}
     <button onClick={()=>{
        props.changeName();
        props.addWish('sleep')
      //  setTimeout(()=>{

        // document.querySelector('#header2').innerHTML = `I wish to ${props.wish}`;
      //  },500)
      //  document.querySelector('#header1').style.display = 'none';

       
       }}>Change it</button>
    </div>
  );

}

const mapStateToProps=(state)=>{
  return {
    name: state.name,
    wish: state.wish
    // name2: state.name2
  }
  
}

const mapDispatchToProps=(dispatch)=>{
  return {
    changeName: ()=>{
      dispatch(
        action1(),
      )
    },
    addWish: (wish)=>{
      dispatch(
        action2(wish)
       
      )
    }
    // changeName2: (name2)=>{
    //   dispatch(
    //     {
    //       type: 'CHANGE_NAME2',
    //       payload: name2
    //     },
       
    //   )
    // }

  }
  
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
