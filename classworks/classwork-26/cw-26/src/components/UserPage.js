import React, {Component} from 'react';
import SignOut from './shared/SignOut';
import GoToCart from './shared/GoToCart';
import UserOrderItems from './shared/UserOrderItems';

class UserPage  extends Component{
    state = {
        stuff: this.props.stuff.stuff,
        stuffInCart: this.props.stuff.stuffInCart
    }

    chooseStuff = (e) => {
        if(
            e.target.textContent.toLowerCase() === 'buy'
            &&
            e.target.tagName === 'BUTTON'
        ) {
            const stuffToAdd = e.target.previousElementSibling.textContent;

            this.props.addStuffInUserPage(stuffToAdd);

            const newStuff = [...this.state.stuffInCart, stuffToAdd]
            this.setState({
                stuffInCart: newStuff
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1>USER PAGE</h1>
                <div className="row">
                    <div className="col-8">
                    <div className="row" onClick={this.chooseStuff}>
                        <UserOrderItems stuff={this.state} />
                    </div>
                    </div>
                    <div className="col-4">
                    <div>
                        User
                    </div>
                    <SignOut switchToMainPage={this.props.switchToMainPage} />
                    <GoToCart switchToCartPage={this.props.switchToCartPage} />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage;