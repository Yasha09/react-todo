import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = () => ({})

class DialogEdit extends React.Component {
    state = {
        inputValue: this.props.cmp.value
    }
    handleChange = (event) => {
        this.setState({inputValue: event.target.value})
    }
    handleSave = () => {
        const {onSave, cmp: {id}} = this.props;
        const {inputValue} = this.state
        onSave(id, inputValue)
    };
    handleClose = () => {
        const {onClose} = this.props;
        onClose()
    }

    render() {
        const {classes} = this.props
        const {inputValue} = this.state
        return (
            <div className={classes.root}>
                <div>
                    <Dialog open={true}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">
                            Update
                        </DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                value={inputValue}
                                label=""
                                fullWidth
                                onChange={this.handleChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={this.handleClose}
                                color="primary">
                                Cancel
                            </Button>
                            <Button
                                onClick={this.handleSave}
                                color="primary"
                            >
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DialogEdit)