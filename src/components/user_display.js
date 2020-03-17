import React, {useContext} from "react";
import AppContext from '../store/context'

const UserDisplay = (props) => {

    const value = useContext(AppContext);

    return (
        <div className='user_display'>
            <span >{value.username}</span>
        </div>
    )
};

export default UserDisplay;