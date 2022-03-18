import './homePage.css'
import { useState, useEffect } from 'react'
import TodoItem from '../../components/todoItem/TodoItem';


const HomePage = () => {
    const [dark, setDark] = useState(false);
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [filterTodos, setFilterTodos] = useState([]);
    const [active, setActive] = useState('')

    useEffect(() => {
        setFilterTodos([...todos])
    }, [todos])

    const addTodoItem = (e) => {
        e.preventDefault()
        setTodos([...todos, {id: todos.length, text: text, completed: false}])
        setText('')
    }

    const markTodoItemCompleted = (id) => {
        const newTodos = [...todos];
        newTodos[id].completed = !newTodos[id].completed;
        setTodos(newTodos);
        
    }

    const removeTodoItem = (id) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    }

    const clearCompletedTodos = () => {
        const newTodos = todos.filter(todo => todo.completed !== true)
        setTodos(newTodos)
    }
    const filterByCompleted = () => {
        setActive('COMPLETED')
        const reset = [...todos]
        const newTodos = reset.filter(item => item.completed === true)
        setFilterTodos(newTodos)
    }

    const filterByActive = () => {
        setActive('ACTIVE')
        const reset = [...todos]
        const newTodos = reset.filter(item => item.completed === false)
        setFilterTodos(newTodos)
    }
    
    const filterByAll = () => {
        setActive('ALL')
        setFilterTodos(todos)
    }

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

  return (
    <div className={`home ${dark? 'homeDark' : 'homeLight'}`}>
        <div className={`top ${dark? 'topDark': 'topLight'}`}>
            <div className="topContainer">
                <h3 className="topTitle">TODO</h3>
                <div className="topToggle" onClick={() => setDark(!dark)}>
                    <img src={dark? 'assets/icon-sun.svg' : 'assets/icon-moon.svg'} alt="" className="topToggleImg" />
                </div>
            </div>
            <form onSubmit={addTodoItem} className={`topInputDiv ${dark? 'topInputDivDark' : 'topInputDivLight'}`}>
                <button type='submit' className="topSubmit"></button>
                <input type="text" onSubmit={addTodoItem} onChange={handleInputChange} value={text} className={`topInput ${dark? 'topInputDivDark' : 'topInputDivLight' }`} placeholder='Create a new todo'/>
            </form>
        </div>
        <div className={`bottom ${dark? 'bottoTodoContainerDark': 'bottomTodoContainerLight'}`}>
            <div className={`bottomTodoContainer ${dark? 'bottomTodoContainerDark': 'bottomTodoContainerLight'}`}>
                <div className="todoItemWrapper">
                    {
                        filterTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} dark onChange={() => markTodoItemCompleted(todo.id)} onClick={() => removeTodoItem(todo.id)} />
                        ))
                    }
                    <div className="todoItem"></div>
                </div>
        
                <div className={`bottomTodoActions ${dark? 'bottomTodoActionsDark': 'bottomTodoActionsLight'}`}>
                    <span className="todoItemsLeft">5 Items left</span>
                    <span className="todoItemsFilterOptions">
                        <span onClick={filterByAll} className={`allItems ${active === 'ALL'? 'active' : ''}`}>All</span>
                        <span onClick={filterByActive} className={`activeItems ${active === 'ACTIVE'? 'active' : ''}`}>Active</span>
                        <span onClick={filterByCompleted} className={`completedItems ${active === 'COMPLETED'? 'active' : ''}`}>Completed</span>
                    </span>
                    <span onClick={clearCompletedTodos} className="clearCompleted">Clear Completed</span>
                </div>
            </div>
            <span className={`mobileFilterOptions ${dark? 'mobileFilterOptionsDark': 'mobileFilterOptionsLight'}`}>
                <span onClick={filterByAll} className="allItems">All</span>
                <span onClick={filterByActive} className="activeItems">Active</span>
                <span onClick={filterByCompleted} className="completedItems">Completed</span>
            </span>
            
            <p className={`bottomText ${dark? 'bottomTextDark': 'bottomTextLight'}`}>Drag and drop to reorder list</p>
        </div>
    </div>
  )
}

export default HomePage