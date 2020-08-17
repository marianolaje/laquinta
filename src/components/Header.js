import React, {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Arrow from '../../assets/arrow.png'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'fixed',
        top: 0,
        zIndex: '99999',
        width: '100%',
        flexWrap: 'wrap',
        paddingLeft: '20px',
        boxShadow: '0px 2px #E5E7EB',
        '& > *': {
            margin: theme.spacing(1.3),
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
    },
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Lato"',
            '"Roboto"',
            'sans-serif'
        ].join(','),
    },
});

const Header = ({setInfoBool, isMobile}) => {
    const classes = useStyles();

    const history = useHistory()
    let location = useLocation()

    const goBackButton = () => {
        history.go(-1)
    }

    useEffect(()=>{
        setInfoBool(false)
    }, [location, setInfoBool])

    return(
        <ThemeProvider theme={theme}>
            <header>
                {isMobile
                    ? <Paper elevation={2}
                             className={classes.root}
                             onClick={goBackButton}
                    >
                        <img src={Arrow} alt="Volver"/>
                        <Typography variant="h6">
                            Ayuda
                        </Typography>
                    </Paper>
                    : null}


            </header>
        </ThemeProvider>
    )
}

Header.propTypes = {
    setInfoBool: PropTypes.func.isRequired
}

export default Header