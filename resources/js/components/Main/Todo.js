import React,{ useState } from 'react';
import { Modal, Input, Button, Card, CardActions, CardContent } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = useState(false);

  const [inputTitle, setInputTitle] = useState(props.title);
  const [inputDate, setInputDate] = useState(props.date);
  const [inputTime, setInputTime] = useState(props.time);
  const [inputContent, setInputContent] = useState(props.content);

  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [time, setTime] = useState(props.time);
  const [content, setContent] = useState(props.content);
  const [isChecked, setIsChecked] = useState(props.is_checked);

  const getTodos = () => {
    return props.getTodos();
  }

  const handleClose = () => {
    setOpen(false);
    clearInput();
  };

  const clearInput = () => {
    setInputTitle(title);
    setInputDate(date);
    setInputTime(time);
    setInputContent(content);
  }

  const check = () => {
    console.log(!isChecked);
    axios.put(`/api/todo/${props.id}/check`, {
      is_checked: !isChecked,
    })
    .then((res) => {
      getTodos();
      if (props.id === res.data.id) {
        setTodo(res.data);
      }
      console.log(res.data);
    })
    .catch(error => {
      console.log(error)
    })
  }

  const updateTodo = (event) => {
    event.preventDefault();

    axios.put(`/api/todo/${props.id}`, {
      title: inputTitle,
      date: inputDate,
      time: inputTime,
      content: inputContent,
    })
    .then((res) => {
      console.log(res);
      setTodo(res.data);
      handleClose();
    })
    .catch(error => {
      console.log(error)
    })
  }

  const deleteTodo = (event) => {
    event.preventDefault();

    axios.delete(`/api/todo/${props.id}`)
    .then((res) => {
      console.log(res);
      getTodos();
    })
    .catch(error => {
      console.log(error)
    })
  }

  const setTodo = (props) => {
    setTitle(props.title);
    setDate(props.date);
    setTime(props.time);
    setContent(props.content);
    setIsChecked(props.is_checked);
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
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              placeholder="やること"
            />
            <Input
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
            <Input
              type="time"
              value={inputTime}
              onChange={(e) => setInputTime(e.target.value)}
            />
            <Input
              type="text"
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
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
          <p><span>🗓</span>{date}</p>
        </div>
        <div className="todo__nav">
          <CardActions>
            {isChecked ? (
              <Button
                size="large"
                onClick={check}
              >✅</Button>
            ): (
              <Button
                size="large"
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
            <h3>{title}</h3>
          </div>
          <div className="todo__time">
            <p><span>⏰</span>{time}</p>
          </div>
          <div className="tofo__content">
            <p>{content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Todo
