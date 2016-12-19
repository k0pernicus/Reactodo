import React from 'react';

class TodoComponent extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="todo">
                {this.props.title}, from <i>{this.props.author}</i>...
                {this.props.body} 
            </div>
        );
    }

}

export default TodoComponent;