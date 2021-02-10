
import './App.css';
import {connect} from 'react-redux';
import Comp1 from './components/Comp1';
import {action1,action2,action3} from './actions/myaction';
import './bootstrap.css'

function App(props) {

  console.log(props)


  return (
    <div className="App"><br/>
     {/* <h1 id='header1'>{`I am an app component and i got the name ${props.name}`} </h1><br/>
     <h1 id='header2' ></h1> */}
     
     {/* <Comp1/> */}

     {/* <button onClick={()=>{
        props.addName('fluffy')
      //  setTimeout(()=>{

        // document.querySelector('#header2').innerHTML = `I wish to ${props.wish}`;
      //  },500)
      //  document.querySelector('#header1').style.display = 'none';

       
       }}>Change it</button> */}

     <h1>To do List</h1><br/>
     <div style={{display:'flex',justifyContent:'center'}}>
     <input className = 'form-control inp' style={{width:'20%'}} type='text'/>
     
     <button onClick={()=>{
        props.changeName();
        const inpbox = document.querySelector('.inp').value

        props.addWish(inpbox)

       setTimeout(()=>{
        document.querySelector('.inp').value = null

       })

       document.querySelector('.box1').style.display = 'block'

      //  document.querySelector('#header1').style.display = 'none';

       
       }}
       
       className='btn btn-sm btn-success'

       >Add ToDos</button>
       </div>
       <div style={{display:'flex',justifyContent:'center'}}>
       <div class='box1' style={{backgroundColor:'yellow',width:'25%',borderRadius:'0px 0px 10px 10px',display:'none'}}>
         <ul>
           {props.wish.map(wish=>{
       return (
         <li class='todobox' key={Math.random()} style={{paddingTop:'10px'}}>{wish}</li>
       )
     })}
         </ul>
       </div>
       </div>
       
    </div>
  );

}

const mapStateToProps=(state)=>{
  return {
    name: state.name,
    wish: state.wish,
    
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
    },
    addName: (name2)=>{
                  dispatch(
                      action3(name2)
          )
      },
    changeName2: (name)=>{
      dispatch(
        action1(name),
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
