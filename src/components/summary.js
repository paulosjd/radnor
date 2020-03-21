import React, {useContext} from "react";
import AppContext from '../store/context'

const Summary = (props) => {

    const value = useContext(AppContext);
    return (
        <div className='summary-text'>
            <h4>This is a demo React app minimal third party libraries and used to demo various features</h4>
            <h4>Below is a generic button whose component was wrapped in an HOC to give it common/reuse style logic</h4>
            <h4>
                    SATURDAY TODO  -  conditional style logic HOC based on props - like example in notes

            </h4>


            <h4>Below is avatar which is used in various places - to reuse it is passed and render as a child / containment / composition</h4>
        </div>
    )
};

export default Summary;