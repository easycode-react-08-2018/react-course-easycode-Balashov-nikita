import React, {Component} from 'react';

class CartOrderItems extends Component{
  render() {
    const {stuffInCart} = this.props.stuff;

    const OrderItems = stuffInCart.map((item, i) =>
      (
        <React.Fragment key={i}>
          <li className="list-group-item">
            <img src="#" alt=""/>
            <a href="#" className="admin-orders__link">
              {item}
            </a>
            <h2 className="float-right badge-light">✓</h2>
          </li>
        </React.Fragment>
      )
    );

    return (
      <React.Fragment>
        {OrderItems}
      </React.Fragment>
    );
  }
}

export default CartOrderItems;