import React from 'react';
import Item from "./Components/Item";
import DialogEdit from "./Components/DialogEdit";
import RemoveDialog from "./Components/RemoveDialog";
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {v4 as uuidv4} from 'uuid';
import {withStyles} from '@material-ui/core/styles';


const styles = () => ({
  root: {
    width: 500,
    display: 'flex',
    flexDirection: 'column'
  },
  inputWrapper: {
    margin: 25,
    alignItems: 'stretch',
    display: 'flex'
  },
  flex1: {
    flex: 1
  },
  addBtn: {
    width: 95
  },
  listWrapper: {
    margin: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
})

class App extends React.Component {
  state = {
    inputValue: "",
    items: [],
    itemDialog: null,
    removeDialog: null,
  }
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }
  handleAdd = () => {
    const {inputValue, items} = this.state;
    const id = uuidv4();
    this.setState({
      items: [...items, {id: id, value: inputValue}]
    })
  }
  handleDelete = (id) => {
    const {items} = this.state;
    const newArr = items.filter(item => item.id !== id)
    this.setState({items: newArr, removeDialog: null})
  }
  handleEdit = (item) => {
    this.setState({itemDialog: item})
  }
  handleRemoveOpen = (item) => {
    this.setState({removeDialog: item})
  }
  handleSave = (id, newValue) => {
    const {items} = this.state;
    const newArr = items.map(item => {
      if (item.id === id) {
        item.value = newValue
      }
      return item
    })
    this.setState({items: newArr, itemDialog: null})
  }
  handleClose = () => {
    this.setState({itemDialog: null})
  }
  handleRemoveClose = () => {
    this.setState({removeDialog: null})
  }
  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.handleAdd()
    }
  }
  inputProps = {
    onKeyDown: this.onKeyDown
  }

  render() {
    const {inputValue, items, itemDialog, removeDialog} = this.state;
    const {classes} = this.props
    return (
        <div className={classes.root}>
          <div className={classes.inputWrapper}>
            <TextField
                className={classes.flex1}
                id="standard-basic"
                label="Write your name"
                value={inputValue}
                onChange={this.handleChange}
                InputProps={this.inputProps}
            />
            <Button
                className={classes.addBtn}
                variant="outlined"
                color="primary"
                onClick={this.handleAdd}
            >
              Add
            </Button>
          </div>
          <div className={classes.listWrapper}>
            {items.map(item => (
                <Item
                    key={item}
                    cmp={item}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                    onRemove={this.handleRemoveOpen}
                />
            ))}
          </div>
          {itemDialog &&
          <DialogEdit
              cmp={itemDialog}
              onSave={this.handleSave}
              onClose={this.handleClose}
          />
          }
          {removeDialog &&
          <RemoveDialog



              onClose={this.handleRemoveClose}
              cmp={removeDialog}
              onDelete={this.handleDelete}
          />}
        </div>
    );
  }
};


export default withStyles(styles)(App);
