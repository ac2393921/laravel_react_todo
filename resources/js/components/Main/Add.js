import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { createRequest } from '../../actions/TodoAction';

import { Modal, Button, Fab, Tooltip, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

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

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [content, setContent] = useState('');

  const [titleError, setTitleError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [contentError, setContentError] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const postTodo = (event) => {
    event.preventDefault();

    if (validate()) {
      const data = {
        title: title,
        date: date,
        time: time,
        content: content
      }
      dispatch(createRequest(data));
      handleClose();
      setClear();
    }
  }

  const validate = () => {
    errorReset();
    if (title && date) {
      return true
    } else {
      const required = '入力必須です。';
      if (title.length > 255) {
        setTitleError('255文字以内で入力してください');
      }
      if (!title) {
        setTitleError(required);
      }
      if (!date) {
        setDateError(required);
      }
      if (!time) {
        setTimeError(required);
      }
      if (!content) {
        setContentError(required);
      }
      if (content.length > 1000) {
        setContentError('1000文字以内で入力してください');
      }
      return false
    }
  }

  const setClear = () => {
    setTitle('');
    setDate('');
    setTime('');
    setContent('');
  }

  const errorReset = () => {
    setTitleError('');
    setDateError('');
    setTimeError('');
    setContentError('');
  }


  return (
    <div className="add">
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="modal__form">
            <h2 id="simple-modal-title">Todo作成</h2>
            <TextField
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={Boolean(titleError)}
              helperText={titleError}
              placeholder="やること"
            />
            <TextField
              type="date"
              value={date}
              error={Boolean(dateError)}
              helperText={dateError}
              onChange={(e) => setDate(e.target.value)}
            />
            <TextField
              type="time"
              value={time}
              error={Boolean(timeError)}
              helperText={timeError}
              onChange={(e) => setTime(e.target.value)}
            />
            <TextField
              type="text"
              value={content}
              error={Boolean(contentError)}
              helperText={contentError}
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
