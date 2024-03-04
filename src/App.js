import './App.css';
import React from 'react';
import {Country} from './components/Country';
import {Card} from './components/Country';
import style from './components/Country.module.css'
// function App() {

//   const style = { width: '80%',
//                   minHeigth: '200px',
//                   margin: '0 auto',
//                   border:'2px solid black'}

//   return (
//     // <div className='App' style={style}>
//     //   <h1>Hello world!!!</h1>
//     //   <div style={{width:'200px',minHeight:'100px',border:'2px solid red',margin:'0 auto'}}>
//     //     <Country country= {{name:'Russia',population:'150 000 000'}}/>
//     //   </div>
       
//     // </div>
//   );
// }

class App extends React.Component{

  state = {
    animals: [{ name:'jiraf',color:'yellow'},
              { name:'cat',color:'hrey'},
              { name:'dog',color:'black'},
              { name:'fox',color:'orange'},
              { name:'pantera',color:'pink'},]
  }

  eventHandler(x){
    console.log(x)
  }


  render(){
    let animal = this.state.animals
    return(
      <>
      <div>
          <div className={style.app}>
             < Card name = {animal[0].name} color = {animal[0].color}/>
             < Card name = {animal[1].name} color = {animal[1].color}/>
             < Card name = {animal[2].name} color = {animal[2].color}/>
             < Card name = {animal[3].name} color = {animal[3].color}/>
             < Card name = {animal[4].name} color = {animal[4].color}/>
        </div>
      </div>
      <div>
        <button onClick={()=>this.eventHandler('work')}>PUSH</button>
        <select onChange={()=>this.eventHandler('work2')}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
      </div>
      </>
     
    )
  }

}

export default App;
