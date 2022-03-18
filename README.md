# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Vercel](https://todo-app-assessment.vercel.app/).  

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./light-view.png)
![](./dark-view.png)

### Links

- Solution URL: (https://github.com/samynaj/todo-app-assessment)
- Live Site URL: (https://todo-app-assessment.vercel.app/)

## My process

### Built with

- HTML markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

One major point of my learning through this assessment is the custom styling of checkbox. Another one is the drag and drop functionality although not yet implemented on this assessment.
I was also able to manage the app state to achieve desired state manipulations.

```js
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
```

### Continued development

I really want to deepen my backend development skills so to have a balanced experience fullstack wise. Then maybe pickup another frontend framework, either Angular or Vue.

### Useful resources

- (https://frontend30.com/css-selectors-cheatsheet/) - This helped me for css selectors. I really liked this pattern and will use it going forward.


## Author
- Name - Samuel Nnaji
- GitHub - [@samynaj](https://github.com/samynaj)

