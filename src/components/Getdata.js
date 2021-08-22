import { makeStyles,withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AlertDialog from './Dialog';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
  },
  header:{
    textAlign:'center',
    backgroundColor: '#f1f1f1',
    height: '100px'
  },
  cardContent:{
    height:'70px'
  },
  skillPercentage:{
    paddingBottom:'10px'
  },
  improve:{
    paddingTop:'10px'
  },
  cardAction:{
      textAlign:'center',
      justifyContent:'center',
      padding:'20px'
  }
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5
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
        name: "Supply, Distribution Managers",
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
      }, {
        name: "Construction Managers",
        match: "50",
        improve: "Improve 5 skills",
        tags: [
          "hot",
          "new"
        ]
      }, {
        name: "Construction Managers",
        match: "50",
        improve: "Improve 5 skills",
        tags: [
          "hot",
          "new"
        ]
      }, {
        name: "Construction Managers",
        match: "50",
        improve: "Improve 5 skills",
        tags: [
          "hot",
          "new"
        ]
      }, {
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

export const ShowData = (props) => {
    const [relevantJobs,setRelevantJobs] = React.useState([])
    const classes = useStyles();
    //console.log(props.bucket1.[0].map((key) => props.bucket1[key]))
    return(
        <div className="main-content">
        { props.bucket1 && props.bucket1.map((item,index) => {
            //item.map((val) => console.log(val))
          return <div className="skill-card" key={index}>
            <Card className={classes.root}>
                <CardHeader className={classes.header} title={item[0].ANZSCO_Title}></CardHeader>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.skillPercentage} variant="caption" component="h2">
                        Skill percentage
                    </Typography>
                    <BorderLinearProgress  variant="determinate" value={parseInt(100)} />
                    <Typography   variant="body2" color="textSecondary">100 %</Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {item[0].ANZSCO_Title.improve}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <AlertDialog />
                </CardActions>
            </Card>
        </div>
        })}   
      </div>
    )
}
  