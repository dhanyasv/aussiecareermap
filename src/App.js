import './App.css';
import Header from './components/Header';
import Select from './components/Autocomplete';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ShowData } from './components/Getdata';


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
     <div className={classes.root}>
      <Grid container spacing={3}>
          <Grid item xs>
          </Grid>
          <Grid className={classes.select} item xs={10} md={6}>
            <Select />
          </Grid>
          <Grid item xs>
          </Grid>
      </Grid>
     </div>
     {ShowData()}
    </div>
  );
}

export default App;
