import React from 'react';
import ReactDOM from 'react-dom';
import AddTodoComponent from './addtodo.jsx';
import TodoComponent from './todo.jsx';

class TodoList extends React.Component {

    render() {
        if (this.props.todolist.length === 0) {
            return <div>No todos...</div>;
        } else {
            let todosToDisplay = this.props.todolist.map( (todo, i) => { return (<li key={i}><TodoComponent author={todo.author} body={todo.body} key={i} title={todo.title} /></li>);});
            return (
                <div>
                <ul>
                {todosToDisplay}
                </ul>
                </div>
            );
        }
    }

}

ReactDOM.render(
    <div>
        <TodoList />
        <AddTodoComponent />
    </div>,
    document.querySelector('#app')
);