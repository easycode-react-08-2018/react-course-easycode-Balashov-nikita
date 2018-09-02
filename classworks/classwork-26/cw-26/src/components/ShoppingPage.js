import React, {Component} from 'react';
import SignOut from './shared/SignOut';
import CartOrderItems from './shared/CartOrderItems';

 class ShoppingPage  extends Component{
     render() {
         return (
            <div className="container">
                <div className="row">
                <div className="col-8">
                    <h1>Shopping Cart</h1>
                    <ul className="list-group">
                        <CartOrderItems stuff={this.props.stuff} />
                    </ul>
                </div>
                <div className="col-4">
                    <div>
                    User
                    </div>
                    <SignOut switchToMainPage={this.props.switchToMainPage} />
                </div>
                </div>
                <div className="row">
                <pre>price:</pre>
                </div>
                <div className="row">
                    <button className="btn btn-primary">Ship it</button>
                </div>
          </div>
         )
     }
 }

 export default ShoppingPage;