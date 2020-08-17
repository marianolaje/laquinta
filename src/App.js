import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import infoDataJson from './mocks/infoJson/information.json'
import subtitlesDataJson from './mocks/infoJson/subtitles.json'
import titlesDataJson from './mocks/infoJson/titles.json'
import Header from "./components/Header/Header";
import Productos from "./components/Productos/Productos";
import TitleSection from "./components/TitleSection/TitleSection";
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography           from '@material-ui/core/Typography';
import ErrorIcon            from '@material-ui/icons/Error';
import green from '@material-ui/core/colors/green';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {infoArrive} from './helper/HelperFunctions'

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
          <Header

          />

          <TitleSection

          />
          <Switch>
            <Route path="/">
              {
                infoBool && !invalidPage && (
                    <Productos

                    />
                )
              }
            </Route>
          </Switch>
        </Router>
      </div>

  );

}

export default App;
