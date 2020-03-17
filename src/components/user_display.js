import React, {useContext} from "react";
import AppContext from '../store/context'

const UserDisplay = (props) => {

    const value = useContext(AppContext);
    console.log(props.myprop)
    return (
        <div className='user_display'>
            <span >{value.username}</span>
        </div>
    )
};

UserDisplay.defaultProps = {
    myprop: 'Hello'
};

export default UserDisplay;