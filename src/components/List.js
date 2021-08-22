import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList() {
  const classes = useStyles();
  const skilss = [{name:'Numeracy',score:'6/10'},
  {name:'Digital engagement',score:'7/10'},{name:'Teamwork',score:'7/10'},{name:'Writing',score:'8/10'},{name:'Learning',score:'6/10'}
,{name:'Problem solving',score:'9/10'},{name:'Oral communication',score:'9/10'},{name:'Planning and organising',score:'8/10'},
{name:'Initiative and innovation',score:'70%'}]
 
  return (
    <List className={classes.root}>
        { skilss.map((item) => {
            return(<ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.score} />
              </ListItem>)
        })}
    </List>
  );
}
