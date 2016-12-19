import React from 'react';

class AddTodoComponent extends React.Component {

    constructor() {
        super();
        this.author = "";
        this.body = "";
        this.title = "";
    }

    render() {
        return (
            <form className="TodoForm">
                <input type="text" placeholder="Author"></input>
                <input type="text" placeholder="Title"></input>
                <textarea type="text" placeholder="Body content"></textarea>
                <input type="submit"></input>
            </form>
        );
    }

}

export default AddTodoComponent;