import React from 'react';
import Paper from '@material-ui/core/Paper';
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
            <h1>This is where stuff import</h1>
        </Paper>
    </div>
    )
}
