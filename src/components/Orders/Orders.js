import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { AvatarGroup } from '@material-ui/lab';
import activeToken from '../../imgs/order-full-active.png'
import inactiveToken from '../../imgs/order-full-inactive.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(9),
    borderColor: "transparent",
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
  
  const [totalOrders, setTotalOrders] = useState(10);
  const [inactiveOrders, setInactiveOrders] = useState(0)

  const addOrder = () => {
    if (inactiveOrders > 0) {
      const newValue = inactiveOrders - 1;
      setInactiveOrders(newValue)
    }
  }
  
  const removeOrder = () => {
    if (totalOrders !== inactiveOrders) {
      const newValue = inactiveOrders + 1;
      setInactiveOrders(newValue)
    }
  }

    return (
    <div>
        <Paper className={styles.paper} elevation={20}>
          <Paper className={styles.scoreboard}>
            <h4>
              THIS IS WHERE ORDER TOKENS GO
            </h4>
            <AvatarGroup spacing="small" max={20}>
            {Array(totalOrders)
          .fill()
          .map((_, i) => (
            <Avatar alt="Order" src={(inactiveOrders < i+1 )? activeToken:inactiveToken} className={styles.large} />
          ))}
            </AvatarGroup>
          </Paper>
          <Button className={styles.btn} onClick={()=>{addOrder()}}>Add Order</Button><Button className={styles.btn} onClick={()=>{removeOrder()}}>Remove Order</Button>

        </Paper>
    </div>
    )
}
