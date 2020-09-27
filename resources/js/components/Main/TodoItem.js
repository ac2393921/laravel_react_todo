import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

import { checkRequest, updateRequest, deleteRequest } from '../../actions/TodoAction';

import { Modal, Button, Card, CardActions, CardContent, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';


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
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
}));

function TodoItem(props) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [time, setTime] = useState(props.time);
  const [content, setContent] = useState(props.content);

  const [titleError, setTitleError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [contentError, setContentError] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const check = () => {
    const data = {
      id: props.id,
      is_checked: !props.is_checked
    }
    dispatch(checkRequest(data));
  }

  const updateTodo = (event) => {
    event.preventDefault();

    if (validate()) {
      const data = {
        id: props.id,
        title: title,
        date: date,
        time: time,
        content: content
      }
      dispatch(updateRequest(data))
      handleClose();
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

  const errorReset = () => {
    setTitleError('');
    setDateError('');
    setTimeError('');
    setContentError('');
  }

  const deleteTodo = (event) => {
    event.preventDefault();
    dispatch(deleteRequest(props.id));
  }

  return (
    <div className="todo">
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="modal__form">
            <h2 id="simple-modal-title">Todo修正</h2>
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
              onChange={(e) => setDate(e.target.value)}
              error={Boolean(dateError)}
              helperText={dateError}
            />
            <TextField
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              error={Boolean(timeError)}
              helperText={timeError}
            />
            <TextField
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              error={Boolean(contentError)}
              helperText={contentError}
              placeholder="具体的に"
            />
            <Button
              onClick={updateTodo}
            >作成</Button>
          </form>
        </div>
      </Modal>

      <Card className="todo__container">
        <div className="todo__header">
          <p><span>🗓</span>{props.date}</p>
        </div>
        <div className="todo__nav">
          <CardActions>
            {props.is_checked ? (
              <Button
                size="large"
                className="check"
                onClick={check}
              >✅</Button>
            ): (
              <Button
                size="large"
                className="not_check"
                onClick={check}
              >⬛︎</Button>
            )}
          </CardActions>
          <CardActions>
            <Button>
              <EditIcon
                onClick={() => setOpen(true)}
              />
            </Button>
          </CardActions>
          <CardActions>
            <Button
              onClick={deleteTodo}
            >
              <DeleteForeverIcon />
            </Button>
          </CardActions>
        </div>
        <CardContent>
          <div className="todo__title">
            <h3>{props.title}</h3>
          </div>
          <div className="todo__time">
            <p><span>⏰</span>{props.time}</p>
          </div>
          <div className="tofo__content">
            <p>{props.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TodoItem
