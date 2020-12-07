import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

 export default function Scoreboard() {
  
  const styles= useStyles()
  const [round, setRound] = useState(1);
  const [p1Name, setP1Name] = useState('P1 Name');
  const [p2Name, setP2Name] = useState('P2 Name');
  const [p1Army, setP1Army] = useState('Player 1 Army');
  const [p2Army, setP2Army] = useState('Player 2 Army');
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);

  const resetAll = () => {
    setP1Name('Player 1');
    setP2Name('PLayer 2');
    setP1Army('P1 Army');
    setP2Army('P2 Army');
    setP1Score(0);
    setP2Score(0);
    setRound(1)
  } 

  const resetScore = () => {
    setRound(1)
    setP1Score(0);
    setP2Score(0);
  } 


        return (
          <div>
            <Paper className={styles.paper} elevation={20}>
             <h3 className={styles.header}>Scoreboard</h3>
              <Paper className={styles.scoreboard}>
              <h4>{`Round:  ${round}`}</h4>
                <h4>{p1Name}: {p1Score}</h4>
                <h4>{p1Army}</h4>
                <h4>{p2Name}: {p2Score}</h4>
                <h4>{p2Army}</h4>
              </Paper>
              <br />
              <Button className={styles.btn} onClick={()=>{setRound(round +1 )}}>Round + 1</Button><Button className={styles.btn} onClick={()=>{setRound(round - 1)}}>Round - 1</Button>
              <br />
              <TextField className={styles.textfield} id="outlined-basic" label="P1 Name" variant="outlined" onChange={(value)=>{setP1Name((value.target.value==='')?'P1 Name':value.target.value)}} /><Button className={styles.btn} onClick={()=>setP1Score(p1Score + 1)}>Score + 1</Button><br />
              <TextField className={styles.textfield} id="outlined-basic" label="P1 Army" variant="outlined" onChange={(value)=>{setP1Army((value.target.value==='')?'P1 Army':value.target.value)}} /><Button className={styles.btn} onClick={()=>setP1Score(p1Score - 1)}>Score - 1</Button><br />
              <br /> <br />
              <TextField className={styles.textfield} id="outlined-basic" label="P2 Name" variant="outlined" onChange={(value)=>{setP2Name((value.target.value==='')?'P2 Name':value.target.value)}}/><Button className={styles.btn} onClick={()=>setP2Score(p2Score + 1)}>Score + 1</Button><br />
              <TextField className={styles.textfield} id="outlined-basic" label="P2 Army" variant="outlined" onChange={(value)=>{setP2Army((value.target.value==='')?'P2 Army':value.target.value)}}/><Button className={styles.btn} onClick={()=>setP2Score(p2Score - 1)}>Score - 1</Button><br />
              <br />
              <Button className={styles.btn} onClick={()=>{resetScore()}}>Reset Score</Button><Button className={styles.btn} onClick={()=>{resetAll()}}>Reset All</Button>
            </Paper>
          </div>
        );
      }

