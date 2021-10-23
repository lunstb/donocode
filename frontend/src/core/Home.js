import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      spacing: 4
    },
  }));
  

export default function Home(){
    const classes = useStyles()
  
    let [state, setState] = useState();
      let [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        fetch('/api')
        .then(res => res.json())
        .then(data => {
          setState(data);
          setIsLoading(false);
        });
      }, []);
    
      return (
        <div className={classes.root}>
          <h3>This is Donodaddy</h3>
          {isLoading ? <p>Loading...</p> : <p>{state.message}</p>}
        </div>
      );
}

