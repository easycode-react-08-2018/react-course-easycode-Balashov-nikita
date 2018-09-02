import React, {Component} from 'react';

class MainPage extends Component{

    render() {
        return (
            <div className="container">
                <h1>Main Page</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.props.switchToAdminPage}>Login as Admin</button>
                    <button className="btn btn-outline-primary" onClick={this.props.switchToUserPage}>Login as User</button>
                </div>
            </div>
        )
    }
}

export default MainPage;