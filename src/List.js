import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/checkBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Divider } from '@material-ui/core';

const AppList = (props) => {
    return(
      <List>
        {props.items.map((item,key) => {
            return(
                <div key={key}>
                    <ListItem button>
                        <CheckBox 
                          icon={<FavoriteBorder />} 
                          checkedIcon={<Favorite />}
                        />
                        <ListItemText primary={item.name} secondary={item.description} />                                       
                    </ListItem>
                    <Divider />
                </div>
                )
        })}        
      </List>
    )
}

export default AppList