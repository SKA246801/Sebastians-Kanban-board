import react, {useState, useContext} from 'react'
import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { makeStyles, alpha } from '@material-ui/core/styles'
import storeApi from '../../utils/storeApi'

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

export default function InputCard({setOpen, listId}) {
    const classes = useStyle();
    const {addMoreCard} = useContext(storeApi);
    const [cardContent, setCardContent] = useState('')
    const handleOnChange = (e) => {
        setCardContent(e.target.value)
    }

    const handleBtnConfirm = () => {
        addMoreCard(cardContent, listId);
        setCardContent('')
        setOpen(false);
    }

    const handleBlur = () => {
        setOpen(false);
        setCardContent('')
    }

    return (
        <div>
            <div> 
                <Paper className={classes.card}>         
                    <InputBase 
                    onChange={handleOnChange}
                    multiline
                    onBlur={handleBlur}
                    fullWidth
                    inputProps={{
                        className: classes.input,
                    }}
                    value={cardContent}
                    placeholder="Enter task" 
                />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    Add Task
                </Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>  
            </div>
        </div>
    )
}