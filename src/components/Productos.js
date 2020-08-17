import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Producto from "./Producto";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 660,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: theme.palette.background.paper,
    },
}));

const Productos = () => {
    const classes = useStyles();
    const [info, setInfo] = useState([])

    const boxComponent = () => {
        const resultInfo = info ?
            info.map((infoRow) => (
                <Producto
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


export default Productos