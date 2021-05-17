import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import Liste from '../Liste/Liste';
import './Container.css';
const Container = () => {
    return(
        <div className='main-container'>
            <div className='location'>
                <PlaceIcon style={{float:'right',marginTop:'3vh',fontSize:'35px',marginRight:'2vh'}}/>
                <Liste/>
                <p style={{float:'right',marginTop:'5vh',marginRight:'2vh'}}>Rechercher Dans :</p>
            </div>
        </div>
    );
}
export default Container;