import React from "react";
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = () => ({
    value:{
        textDecoration:'underline'
    }
})

class RemoveDialog extends React.Component {

    handleClose = () => {
        const {onClose} = this.props;
        onClose()
    }
    handleDelete = () => {
        const {onDelete, cmp: {id}} = this.props
        onDelete(id)
    }

    render() {
        const {classes, cmp: {value}} = this.props
        return (
            <div className={classes.root}>
                <div>
                    <Dialog open={true}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">
                            <div>Do you want to delete an <span className={classes.value}>{value}</span></div>
                        </DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={this.handleClose}
                                color="primary">
                                Cancel
                            </Button>
                            <Button
                                onClick={this.handleDelete}
                                color="primary">
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(RemoveDialog)