import React from "react";
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputWrapper: {
        margin: 25,
        alignItems: 'stretch',
        display: 'flex'
    },
    flex1: {
        flex: 1
    }
})


class Item extends React.Component {
    handleEdit = () => {
        const {onEdit,cmp}=this.props
        onEdit(cmp)
    }
    handleRemoveOpen=()=>{
        const {onRemove,cmp}=this.props
        onRemove(cmp)
    }

    render() {
        const {cmp: {value}, classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.flex1}>
                    {value}
                </div>
                <div>
                    <Button
                        variant="outlined"
                        color="primary"
                        value={value}
                        onClick={this.handleEdit}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        value={value}
                        onClick={this.handleRemoveOpen}
                    >
                        Remove
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Item);