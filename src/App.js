import './App.css';
import Header from './components/Header';
import SelectAuto from './components/Autocomplete';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ShowData } from './components/Getdata';
import CustomAuto from './components/Auto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  select:{
    textAlign:'center',
    marginTop:'40px'
  },
  card:{
    padding:'10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 140,
    width: 100
  }
}));

function App() {
  //console.log(getData())
  const classes = useStyles();
  return (
    <div className="App">
     <Header />
      <SelectAuto />
    </div>
  );
}

export default App;
