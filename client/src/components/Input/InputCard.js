import react from 'react'
import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { makeStyles, alpha } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottoom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        background: '#5AAC44',
        color: '#fff',
        '&:hover': {
            background: alpha('#5AAC44', 0.75),
        },
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    }
}))

export default function InputCard({setOpen}) {
    const classes = useStyle();
    return (
        <div>
            <div> 
                <Paper className={classes.card}>         
                    <InputBase 
                    multiline
                    onBlur = {() => setOpen(false)}
                    fullWidth
                    inputProps={{
                        className: classes.input,
                    }}
                    placeholder="Enter task" 
                />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>Add Task</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>  
            </div>
        </div>
    )
}