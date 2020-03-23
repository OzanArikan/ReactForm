import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    state = {
         isVisible : false
        }
    /*constructor(props){
        super(props);
        this.state = { isVisible : false}
    }*/
    //arrow functionlar otomatik bind eder 
    onClickEvent =  (e) => {
          this.setState({isVisible : !this.state.isVisible });
    }

    render() {
        const { name, surname, department, salary } = this.props;
        const {isVisible} = this.state; 
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick = {this.onClickEvent}>{name} {surname}</h4>
                    <i className="far fa-trash-alt" style= {{ cursor: "pointer" }}></i>
                </div>
                </div>
                { isVisible ?  <div className="card-body">
                    <p className="card-text"> Maaş: {salary}</p>
                    <p className="card-text"> Departman: {department}</p>
                </div>: null }
                
            </div>
        )
    }
}
User.defaultProps = {
    salary: "Bilgi yok"
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
}
export default User;

