import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {getToken, authContext} from './adal-config';


export class App extends React.Component{

  state ={
    values: null,
    user : null
  }

  async componentDidMount(){
   
    const config = {
      headers:{
          Authorization: "Bearer " + getToken(),
          Accept: "application/json, text/plain, */*",
          'Content-Type': "application/json"
      }
  }
    var response = await axios.get(`https://todolistservicetest.azurewebsites.net/api/todolist`, config);

    this.setState({values:response.data, user: authContext.getCachedUser().profile});

  }

  render(){
    if(this.state.values){
      console.log(this.state.values)
      return (
        <div >
          Hello React {this.state.user.name}
          <ul>
          {
            this.state.values.map((item) =>{
              return(<li>{item.Title}</li>)
            })
          }
          </ul>
        </div>
      );
    }
    else{
      return(<div>Loading..</div>)
    }
  }
}

export default App;
