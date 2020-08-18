import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from "./components/Header";
import Productos from "./components/Productos";
import Paper from '@material-ui/core/Paper';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
  responseContainer: {
    padding: 32,
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    backgroundColor: 'floralwhite',
    margin: '16px 0',
    width: 320
  },
  iconFailure: {
    color: 'red',
    fontSize: 120,
    marginTop: -10
  },
  titleTheme: {
    color: 'black',
    fontWeight: 'normal',
    margin: '10px auto'
  },
  text: {
    color: 'dimgrey',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24
  },
  loadingContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    background: 'white',
    padding: 16,
    [theme.breakpoints.up(480)]: {
      width: 460
    },
    [theme.breakpoints.up(1024)]: {
      marginTop: 64
    },
  },

}));

function App() {
  const {
    loadingContainer,
    responseContainer,
    iconFailure,
    titleTheme,
    text,
  } = useStyles();



  return (
      <div>
        <Router >
          <Header/>

          <Switch>
            <Route path="/">
                <Productos/>
            </Route>
          </Switch>
        </Router>
      </div>

  );

}

export default App;
