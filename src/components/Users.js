import React, { Component } from 'react'
import User from "./User"
import UserConsumer from "../context"

class Users extends Component {
   
    render() {
        //const değeri users ise App js tede users olmalı
        const { users } = this.props;

        return (
            <UserConsumer>
            {
                value => {
                    const {users} = value;
                    return (
                        <div>
                            {
                                users.map(user => {
                                    return (
                                        <User
                                            key={user.id}
                                            name={user.name}
                                            surname={user.surname}
                                            salary={user.salary}
                                            department={user.department}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
        )
    }
}

export default Users;
