import React from 'react';
import UserPanel from './UserPanel';

export default function UserPanelList(props) {
    const UserPanelElem = props.users.map(user =>
        <div key={user.id}><UserPanel user={user}></UserPanel></div>
    );

    return (
        <div>{UserPanelElem}</div>
    )
}
