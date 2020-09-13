import React, { useState } from 'react'

import { Modal, Input, Button, Fab, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import { createAction } from '../../services/TodoService';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    outline:0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
}));

function Add() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const requestCreate = createAction();

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [content, setContent] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const postTodo = (event) => {
    event.preventDefault();
    requestCreate(title, date, time, content);
    handleClose();
    setClear();
  }

  const setClear = () => {
    setTitle('');
    setDate('');
    setTime('');
    setContent('');
  }

  return (
    <div className="add">
      <Modal
        // className="modal"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="modal__form">
            <h2 id="simple-modal-title">Todo作成</h2>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="やること"
            />
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <Input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="具体的に"
            />
            <Button
              onClick={postTodo}
            >作成</Button>
          </form>
        </div>
      </Modal>

      <Tooltip
        title="Add"
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}

export default Add
