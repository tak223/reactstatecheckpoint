
import './App.css';
import './style.css';


import React,{useState} from "react";
class Welcome extends React.Component {

 state = {
  person : {
    fullName: "takwa",
     bio:"this is my bio",
    imgSrc: "https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg",
  },
  
  show:false,
  intervall :null,
  timer :0

 };
 componentDidMount(){
   this.setState({
     intervall:setInterval(()=>{
       this.setState({timer:this.state.timer +1})     }, 1000),
   });
 }
 showing=()=>{
   this.setState({
    show : !this.state.show
   })


 }
 render() {
   return(
     <div className='main'>
     <button  onClick={this.showing}> {this.state.show ?' hide list ': 'show list'} </button>
     {
      (this.state.show ?
     (
       <div className='main2' >
         <h1> {this.state.person.fullName} </h1>
         <h1> {this.state.person.bio} </h1>
         <img src={this.state.person.imgSrc} alt="pic" width={'100px'} />
         <h2> {this.state.timer} </h2>
       </div>
     ):<p>click to show list</p>
     
     )}
     
     
     </div>


   )
 }
}
export default Welcome;