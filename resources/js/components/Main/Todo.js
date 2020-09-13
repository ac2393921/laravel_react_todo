import React,{ useState } from 'react';
import { Modal, Input, Button, Card, CardActions, CardContent } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

import { updateAction, checkAction, deleteAction } from '../../services/TodoService';

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

function Todo(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [time, setTime] = useState(props.time);
  const [content, setContent] = useState(props.content);

  const requestUpdate = updateAction();
  const requestDelete = deleteAction();
  const requestCheck = checkAction();

  const handleClose = () => {
    setOpen(false);
  };

  const check = () => {
    requestCheck(props.id, !props.is_checked);
  }

  const updateTodo = (event) => {
    event.preventDefault();
    requestUpdate(props.id, title, date, time, content);
    handleClose();
  }

  const deleteTodo = (event) => {
    event.preventDefault();
    requestDelete(props.id);
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

export default Todo
