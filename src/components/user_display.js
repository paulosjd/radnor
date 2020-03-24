import React, {useContext} from "react";
import AppContext from '../store/context'

const UserDisplay = (props) => {

    const context = useContext(AppContext);
    return (
        <div className='user_display'>
            <span>{context.username}</span>
        </div>
    )
};

export default UserDisplay