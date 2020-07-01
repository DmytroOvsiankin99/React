import React from 'react';
import Preloader from '../../common/preloader/preolader';

let ProfileInfo = (props) => {
    if(props.profile===null){
        return <Preloader />
    }
    return(
        <div>
            <img src={props.profile.photos.large}/>
        </div>
    )
}

export default ProfileInfo;