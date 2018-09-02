import React, {Component} from 'react';

class GoToCart extends Component{
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-outline-primary" onClick={this.props.switchToCartPage}>Cart</button>
            </React.Fragment>
        );
    }
}

export default GoToCart;