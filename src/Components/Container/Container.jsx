import React ,{useState,useEffect} from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import Liste from '../Liste/Liste';
import Card from '../Card/Card';
import axios from "axios";
import './Container.css';

const Container = () => {
    const [machins, setMachins] = useState([]);

    useEffect(()=> {    
        console.log("H-Design");
        axios.get('http://localhost:3001/machins')
        .then(res => {
            setMachins(res.data);
            console.log(res.data);
        })
        .catch(error =>{ 
            console.log(error);
        });
    },[]);

    useEffect(()=> {
        console.log('stat => ' , machins)
    },[machins])

    return(
        <div className='main-container'>
            <div className='location'>
                <PlaceIcon style={{marginTop:'3vh',fontSize:'35px',marginRight:'2vh'}}/>
                <Liste/>
                <p style={{marginTop:'5vh',marginRight:'2vh'}}>: Rechercher Dans</p>
            </div>
            <div className='card-container'>
            {machins ? machins.map((v,i)=> {
                return <Card {...v} key={i} />
            }) :" loading ..." }
            </div>
        </div>
    );
}
export default Container;