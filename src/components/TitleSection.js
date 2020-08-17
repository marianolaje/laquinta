import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {infoArrive} from '../../helper/HelperFunctions'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    imageIcon: {
        width: '100%',
        maxWidth: 30,
        backgroundColor: theme.palette.background.paper,
        display: 'inline',
        marginLeft: '20px'
    },
    textTitle: {
        marginLeft: '10px',
        display: 'inline-block',
        color: '#011238'
    },
    containerDiv: {
        marginTop: 80,
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 660,
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down(580)]: {
            paddingLeft: 10
        },
        [theme.breakpoints.up(580)]: {
            textAlign: 'center',
        },
    },
    containerDivInfo: {
        marginTop: 80,
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down(580)]: {
            paddingLeft: 10
        },
        [theme.breakpoints.up(580)]: {
            textAlign: 'center',
        },
    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Lato"',
            '"Roboto"',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#28C339'
        },
        secondary: {
            main: '#011238',
        }
    },
});

const TitleSection = ({title, setTitle, country, titlesData, infoData, subtitlesData, setInvalidPage, isMobile}) => {
    const [boolControl, setBoolControl] = useState(false)

    const classes = useStyles();
    let location = useLocation()

    const url = location.pathname

    useEffect(()=>{
        let result = []
        if(infoArrive(subtitlesData)){
            result = subtitlesData.filter(row => (row.country.includes(country) && (row.urltitle === url || row.urltitlefather === url)))
        }

        if(infoArrive(subtitlesData) && result.length === 0 && url !== '/'){
            setInvalidPage(true)
        } else {
            setInvalidPage(false)
        }

        knowTitle()
        if(infoArrive(titlesData) && !boolControl) setBoolControl(true)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titlesData, location, boolControl])

    const knowTitle = () => {
        if(infoArrive(titlesData) && url === '/' && country){
            setTitle({title: `Atención al cliente ${country}`})
            return
        }
        if(url.includes('contact-us')){
            setTitle({title: "Envíanos tu problema"})
            return
        }

        if(boolControl && titlesData.filter(info => info.urltitle === url).length>0){
            setTitle(titlesData.filter(info => info.urltitle === url)[0])
        }
        else if(boolControl && url.indexOf('/') !== url.lastIndexOf('/')){
            setTitle(infoData.filter(info => info.urlsubtitle === url && info.country.indexOf(country)>=0)[0])
        }
        else {
            setTitle({title: "La URL ingresada no existe."})
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <div className={url.indexOf('/') !== url.lastIndexOf('/') ? classes.containerDivInfo : classes.containerDiv}>
                {Object.keys(title).length>0 && Object.keys(title).find(key => key === 'icon') && (
                    <img
                        src={`${title.icon}`}
                        className={classes.imageIcon}
                        alt="iconos"
                    />)
                }
                {title && infoArrive(title) && (
                    <h2 className={classes.textTitle}>{title.title}</h2>
                )}
            </div>
        </ThemeProvider>
    )
}

TitleSection.propTypes = {
    title: PropTypes.object.isRequired,
    setTitle: PropTypes.func.isRequired,
    country: PropTypes.string.isRequired,
    titlesData: PropTypes.array.isRequired,
    infoData: PropTypes.array.isRequired,
    subtitlesData: PropTypes.array.isRequired,
    setInvalidPage: PropTypes.func.isRequired
}

export default TitleSection
