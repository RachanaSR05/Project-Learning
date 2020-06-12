import React from 'react';

import './App.css';

import Swal from 'sweetalert2';

class App extends React.Component{

  constructor(props) {
     super(props);
     this.state = { weight: null , height: null, bmi: null };
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.change = this.change.bind(this);  
     this.calc = this.calc.bind(this); 
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

  calc(e){
   this.calculateBMI();
  }
   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var heightSquared = (this.state.height/100  * this.state.height/100);
      var bmi = this.state.weight / heightSquared;
      var low = Math.round(18.5 * heightSquared);                                                         
      var high = Math.round(24.99 * heightSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
        Swal.fire ("You are in a healthy weight range")
      }
      else if(bmi >= 25 && bmi <= 29.9){
         Swal.fire ("You are overweight")
      }
      else if(bmi >= 30){
          Swal.fire("You are obese")
      }
      else if(bmi < 18.5){
        Swal.fire("You are under weight")
      }
      this.setState({message: message});  
      this.setState({bmi: Math.round(bmi * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }

 
 
  
  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className='first'>
      <div className="App">
        <div className="App-header">
          <h2>BMI Calculator</h2>
        </div>
          <form onSubmit={this.submitMe}>
            
             <label>
             Enter your height in cm: 
            </label>
            <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
             <label>
             Enter your weight in kg : 
            </label>
            <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
            <label> Hello,  Your BMI is {this.state.bmi} </label>
          
              
             
            <input type="submit" value="Submit"/>
          </form>
      
      </div>
      </div>
    );
  }
}

export default App;
