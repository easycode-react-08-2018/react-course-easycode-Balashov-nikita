import React, {Component} from 'react';

class SignOut extends Component{
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-outline-primary" onClick={this.props.switchToMainPage}>Sign Out</button>
            </React.Fragment>
        );
    }
}

export default SignOut;