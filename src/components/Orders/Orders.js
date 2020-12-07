import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop: '5%',
      
    },
    header: {
      color: '#000000',
    },
    scoreboard: {
      backgroundColor: 'black',
      color: 'white',
      lineHeight: .5,
      padding: 5
    },
    textfield: {
      marginTop: '5px'
    },
    btn: {
      marginTop: '15px',
      marginLeft: '5px',
      backgroundColor: 'darkgrey'
    }
  })); 

export default function Orders() {
    const styles = useStyles()
    return (
    <div>
        <Paper className={styles.paper} elevation={20}>
          <Paper className={styles.scoreboard}>
            <h4>
              THIS IS WHERE ORDER TOKENS GO
            </h4>
            <Avatar alt="Order" src="../imgs/tokens.jpg"/>
          </Paper>
        </Paper>
    </div>
    )
}
