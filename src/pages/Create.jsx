import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});

export default function Create() {

    const classes = useStyles();

    return (
        <Container>
            <Typography
                variant="h6"
                color="txtSecondary"
                component="h2"
                gutterBottom
            >
                Create a new Note
            </Typography>
            <form noValidate autoComplete="off">
                <TextField 
                    className={classes.field}
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                />
            </form>
            <Button 
                //className={classes.btn}
                onClick={() => console.log("clicked....")}
                type="submit"
                color="primary"
                variant="contained"
                // startIcon={<SendIcon />}
                endIcon={<KeyboardArrowRightIcon />}
                >
                Submit
            </Button>
            {/* <Button color="secondary" variant="outlined">Add</Button> */}
            {/* <Button color="secondary" variant="contained">Add</Button> */}
        </Container>
    )
}
