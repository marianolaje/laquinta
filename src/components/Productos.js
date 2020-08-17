import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MainTitleBox from "../MainTitleBox/MainTitleBox";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 660,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: theme.palette.background.paper,
    },
}));

const Productos = ({titlesData, subtitlesData, setInfoBool, country}) => {
    const classes = useStyles();
    const [info, setInfo] = useState([])

    let location = useLocation()

    useEffect(()=>{
        const url = location.pathname;
        if(url.indexOf('/') !== url.lastIndexOf('/')){
            setInfoBool(true)
        }
        else if(url.indexOf('/') !== url.lastIndexOf(url.charAt(url.length-1)) && url.indexOf('/') === url.lastIndexOf('/')) {
            setInfoBool(false)
            setInfo(subtitlesData.filter(row => row.urltitlefather === url && row.country.includes(country)))

        } else {
            setInfoBool(false)
            setInfo(titlesData)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, country, setInfoBool])


    const boxComponent = () => {
        const resultInfo = info ?
            info.map((infoRow) => (
                <MainTitleBox
                    key = {infoRow.id}
                    infoRow = {infoRow}
                />
            ))
            : null
        return resultInfo
    }

    return (
        <div className={classes.root}>
            {boxComponent()}
        </div>
    );
}

Productos.propTypes = {
    setInfoBool: PropTypes.func.isRequired,
    setTitle: PropTypes.func,
    country: PropTypes.string.isRequired,
    titlesData: PropTypes.array.isRequired,
    subtitlesData: PropTypes.array.isRequired,

}

export default Productos