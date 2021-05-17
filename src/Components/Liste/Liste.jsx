import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

export default function Liste() {
  const classes = useStyles();
  const [ville, setVille] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setVille(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Ville</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={ville}
          onChange={handleChange}
        >
          <MenuItem value={1}>Ariana</MenuItem>
          <MenuItem value={2}>Béja</MenuItem>
          <MenuItem value={3}>Bizerte</MenuItem>
          <MenuItem value={4}>Gabès</MenuItem>
          <MenuItem value={5}>Gafsa</MenuItem>
          <MenuItem value={6}>Jendouba</MenuItem>
          <MenuItem value={7}>Kairouan</MenuItem>
          <MenuItem value={8}>Kasserine</MenuItem>
          <MenuItem value={9}>Kébili</MenuItem>
          <MenuItem value={10}>Kef</MenuItem>
          <MenuItem value={11}>Mahdia</MenuItem>
          <MenuItem value={12}>Manouba</MenuItem>
          <MenuItem value={13}>Médenine</MenuItem>
          <MenuItem value={14}>Monastir</MenuItem>
          <MenuItem value={16}>Nabeul</MenuItem>
          <MenuItem value={17}>Sfax</MenuItem>
          <MenuItem value={18}>Sidi Bouzid</MenuItem>
          <MenuItem value={19}>Siliana</MenuItem>
          <MenuItem value={20}>Sousse</MenuItem>
          <MenuItem value={21}>Tataouine</MenuItem>
          <MenuItem value={22}>Tozeur</MenuItem>  
          <MenuItem value={23}>Tunis</MenuItem>  
          <MenuItem value={24}>Zaghouan</MenuItem>  
        </Select>
      </FormControl>
    </div>
  );
}