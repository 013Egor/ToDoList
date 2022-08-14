import React from 'react';

import ToDoItems from './ToDoItems'; 
import DescribePanel from './DescribePanel';

class MainView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cur: {name: "", description: "", id: undefined},
            describePanel: false
        }
        this.handleCurrentRecord = this.handleCurrentRecord.bind(this);
        this.onChangeRecord = this.onChangeRecord.bind(this);
        this.temp = this.temp.bind(this);
    }

    handleCurrentRecord(name, description, id) {
        var describePanel = document.getElementById("toDoDescribe");
        var listPanel = document.getElementById("toDoList");
        var moveBar = document.getElementById("moveBar");

        describePanel.style.display = this.state.describePanel ? "none" : "inline"; 
        moveBar.style.display = this.state.describePanel ? "none" : "inline";
        listPanel.style.width = this.state.describePanel ? "100%" : "30%"; 
        listPanel.style.borderRadius = this.state.describePanel ? "7px 7px 7px 7px" : "7px 0px 0px 7px";
        describePanel.style.width = "70%";

        if (id === this.state.cur.id || this.state.id === undefined) {
            var value = this.state.describePanel ? false : true;
            this.setState({describePanel: value});
        }

        this.setState({cur: {name: name, description: description, id: id}});
    }

    onChangeRecord(item) {
        console.log("dfdf");
        this.props.handleChangeRecord(item);
    }

    temp(event) {
        console.log("hello" + event.x);
        
    }

    render() {

        return (
            <div onMouseDownCapture={this.temp} id="toDoPanel">

                <ToDoItems filterText={this.props.filterText} item={this.props.records} handleTask={this.props.onCompleteTask} handleCurrentRecord={this.handleCurrentRecord} />
                
                <DescribePanel item={this.state.cur} handleChangeRecord={this.props.handleChangeRecord} deleteRecord={this.props.deleteRecord} />
            </div>
        );
    }
}

export default MainView;