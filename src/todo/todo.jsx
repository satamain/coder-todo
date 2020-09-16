import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        console.log(this.state.description)
        axios.post(URL, { description })
            .then(resp => console.log('Enviado'))

    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description} />
                <TodoList />
            </div>
        )
    }
}