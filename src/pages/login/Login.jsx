import React from 'react';
import './Login.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    materialBtn: {
      marginLeft: '5px',
      marginRight: '5px',
      marginTop: '10px',
      backgroundColor: '#00ADB5',
      borderRadius : '50px'
    }
  }));
const Login = () => {
    const classes = useStyles();
    const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
   <div className='login-container'>
        <div className='cercle' style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png')"}}>
       </div>
       <form>
           <div style={{marginBottom: '50px'}}> 
               <div className='line'/>
               <span className='span'>S'identifier</span> 
               <div className='line'/>
            </div>
           <div className='input-icons'>
                <MailOutlineIcon className="icon"/>
                <input type="email" className="input-field" placeholder={"Email ..."} />
           </div>
           <div className='input-icons'>
                <LockOpenIcon className="icon"/>
                <input type="password" className="input-field" placeholder="Mot de passe ..." />
            </div>
            <Button variant="contained" classes={{ root: classes.materialBtn }} href="/login">
            Connexion
          </Button>
        </form>
        <hr style={{width:"80%",marginTop:'30px'}}></hr>
        <Link to='/register' style={{color:"#00ADB5", marginTop:'20px'}}> Créer un compte</Link>
   </div>
  );
};

export default Login ; 
