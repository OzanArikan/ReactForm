import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider, Consumer

class UserProvider extends Component {

  state = {
    users: [
      {
        id: 1,
        name: "Ozan ",
        surname: "Arıkan",
        salary: "400",
        department: "X"
      },
      {
        id: 2,
        name: "Çiğdem ",
        surname: "Üreden",
        salary: "500",
        department: "X"
      }
    ]
  }
  
  render() {
    return (
      <div>
         <UserContext.Provider value = {this.state} >
           {this.props.children}
         </UserContext.Provider>
      </div>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;