import { makeStyles,withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlertDialog from './Dialog';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

export const jsonData = {
    product: "Skill Match Data",
    matchedJobs: [
      {
        name: "Corporate Services Managers",
        match: "100",
        tags: [
          "hot",
          "nearby"
        ]
      },
      {
        name: "Supply, Distribution and Procurement Managers",
        match: "80",
        improve: "Improve 2 skills",
        tags: [
          "hot",
          "new"
        ]
      },
      {
        name: "Human Resource Managers",
        match: "70",
        improve: "Improve 3 skills",
        tags: [
          "hot",
          "new"
        ]
      },
      {
        name: "Construction Managers",
        match: "50",
        improve: "Improve 5 skills",
        tags: [
          "hot",
          "new"
        ]
      },
      {
        name: "Cafe Workers",
        match: "50",
        improve: "Improve 5 skills",
        tags: [
          "hot",
          "new"
        ]
      },
      {
        name: "Fitness Instructors",
        match: "70",
        improve: "Improve 3 skills",
        tags: [
          "hot",
          "new"
        ]
      }
    ]
  };
const showPopUp = () => {

} 
export const ShowData = () => {
    const classes = useStyles();

    return(
        <div className="main-content">
        {jsonData.matchedJobs.map((item) =>{
          return <div className="skill-card">
          <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {item.name}
        </Typography>
        <BorderLinearProgress variant="determinate" value={item.match} />
        <Typography variant="body2" color="textSecondary">{`${item.match} %`}</Typography>
            <p>{item.improve}</p>
      </CardContent>
      <CardActions>
        <AlertDialog />
      </CardActions>
      
    </Card>
        </div>
        })}
          
        
      </div>
    )
}
  