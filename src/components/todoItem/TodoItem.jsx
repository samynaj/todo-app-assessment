import './todoItem.css'

const TodoItem = ({todo, dark, onChange, onClick}) => {
  return (
    <div className="todoItem">
        <label className="todoItemCheckbox">
            <p className={`${todo.completed? 'todoItemText': ''}`}>{todo.text}</p>
            <input onChange={onChange} type="checkbox" checked={todo.completed}/>
            <span className={`checkmark ${dark? 'checkmarkDark': 'checkmarkLight'}`}></span>
        </label>
        <span onClick={onClick}  className="todoItemCancel">&#10005;</span>
    </div>
  )
}

export default TodoItem