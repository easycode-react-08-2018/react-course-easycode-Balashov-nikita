import React, {Component} from 'react';

class AdminOrderItems extends Component{
    render() {
        const {stuff} = this.props;

        const OrderItems = stuff.map((item, i) =>
            (
                <React.Fragment key={i}>
                    <li className="list-group-item">
                        <img src="#" alt=""/>
                        <a href="#" className="admin-orders__link">
                        {item}
                        </a>
                        <h2 className="float-right btn-link hover">✎</h2>
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

export default AdminOrderItems;