import React, {useState} from "react"
import { InputBase, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',

    },

    editableTitle: {
        flexGrow: 1,
        fontSize:"1.2rem",
        fontWeight: "bold",
    },

    input: {
        margin: theme.spacing(1),
        fontSize:"1.2rem",
        fontWeight: "bold",
        "&:focus": {
            background: '#ddd',
        }
    }
}))

export default function Title() {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    return (
        <div>
            {open ? (
                // This is on click
                <div>
                    <InputBase 
                        autoFocus 
                        value="Todo" 
                        inputProps={{className:classes.input,}} 
                        fullWidth onBlur={() => setOpen(!open)}
                    />
                </div>
            ) : (
                <div className={classes.editableTitleContainer}>
                    <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>Todo</Typography>
                    <MoreHorizIcon/>
                </div>
            )}
        </div>
    )
}