

import React, { Component} from 'react'
import Todos from '../Components/Todos'

class TodoApp extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Search React Course',
                description: 'Look for it excluding udemy and coursera',
                done: false
            },
            {
                id: 2,
                title: 'Install Node and npm',
                description: "You can't buid without environment setup",
                done: false
            },
            {
                id: 3,
                title: 'Create React App',
                description: 'React is One of the Top tools in industry',
                done: false
            }
        
        ]
    }

    markComplete = (id) => {
        console.log('inside App')
        this.setState({
            todos: this.state.todos.map(todo => {
         if (todo.id === id){
             todo.done = !todo.done
         }   
            return todo;
        })   
    })

    }

    delete = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)] 
         })
    }

    outerdiv = () => {
        return {
            width: '40%',
            alignItem: 'center',
            margin: '0 auto',
            border: '2px solid green',
            justifyContent: 'center',
            padding: '10px 12px 20px',
            background: 'lightgrey'
        }
    }

    innerdiv = () => {
        return {
            // display: 'flex',
            width: '100%',
            border: '2px solid blue' ,
            alignItem: 'center',
            justifyContent: 'center'
        }
    }


    render(){
        console.log(this.state.todos)
        return (
            <div style={this.outerdiv()} >
                <h1>
                    TodoList App 
                </h1>
                <div style={this.innerdiv()}>
                    <Todos markComplete={this.markComplete} todos={this.state.todos} delete={this.delete} />
                </div>
           </div>
        );
    }
}

export default TodoApp;