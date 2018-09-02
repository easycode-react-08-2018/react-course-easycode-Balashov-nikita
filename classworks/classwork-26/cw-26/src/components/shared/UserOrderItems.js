import React, {Component} from 'react';

class UserOrderItems extends Component{
    render() {
        const {stuff, stuffInCart} = this.props.stuff;

        const OrderItems = stuff.map((item, i) =>{
                if(stuffInCart.includes(item)) {
                    return (
                        <React.Fragment key={i}>
                            <div className="card-body">
                                <h5 className="card-title">{item}</h5>
                                <p className="card-text">{item}</p>
                                <button className="btn btn-light" disabled>Buy</button>
                                <h3 className="text-success">✓✓✓✓✓</h3>
                            </div>
                        </React.Fragment>
                    )
                } else {
                    return (
                        <React.Fragment key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item}</h5>
                                    <p className="card-text">{item}</p>
                                    <button className="btn btn-primary" >Buy</button>
                                </div>
                            </div>
                        </React.Fragment>
                    )    
                }     
            }
        );

        return (
            <React.Fragment>
                {OrderItems}
            </React.Fragment>
        );
    }
}

export default UserOrderItems;