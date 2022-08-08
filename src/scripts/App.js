import React from 'react';

import '../styles/bar.css';
import '../styles/describePanel.css';
import '../styles/style.css';
import '../styles/toDoListPanel.css';

import Bar from './Bar';
import MainView from './MainView';
import Modal from './ToDoForm';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toDoRecords: [],
            modalFormShow: false
        }

        this.onCompleteTask = this.onCompleteTask.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.closeToDoForm = this.closeToDoForm.bind(this);
        this.openToDoForm = this.openToDoForm.bind(this);
    }

    onCompleteTask(id, status) {
        var temp = this.state.toDoRecords;
        temp.forEach(item => {
            if (item.id == id) {
                item.status = status;
            }
        })
        console.log(temp);

        this.setState({toDoRecords: temp});   
    }

    handleAddButton(name, description) {
        let size = this.state.toDoRecords.length;
                    
        this.setState(
            {
                toDoRecords: this.state.toDoRecords.concat(
                    {id: size, name:name, description: description, status: "wait"}
                )
            });
    }

    closeToDoForm() {
        this.setState({modalFormShow: false});
    }

    openToDoForm() {
        this.setState({modalFormShow: true});
    }

    render() {

        return (
            <div id="container">
                <h1>To Do list</h1>
                
                <Bar openToDoForm={this.openToDoForm} />
                <MainView records={this.state.toDoRecords} onCompleteTask={this.onCompleteTask} />
                <Modal show={this.state.modalFormShow} handleClose={this.closeToDoForm} handleAddButton={this.handleAddButton}/>
            </div>
        );
    }
}

export default App;