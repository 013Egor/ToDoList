import React from 'react';

import ToDoItems from './ToDoItems'; 
import DescribePanel from './DescribePanel';

class MainView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cur: {name: "", description: "", id: undefined}
        }
        this.handleCurrentRecord = this.handleCurrentRecord.bind(this);
        this.onChangeRecord = this.onChangeRecord.bind(this);
        this.temp = this.temp.bind(this);
    }

    handleCurrentRecord(name, description, id) {
        var describePanel = document.getElementById("toDoDescribe");
        var listPanel = document.getElementById("toDoList");
        var moveBar = document.getElementById("moveBar");

        if (this.state.cur.id === id) {
            describePanel.style.display = describePanel.style.display == "inline" ? "none" : "inline"; 
            moveBar.style.display = moveBar.style.display == "inline" ? "none" : "inline";
            listPanel.style.width = listPanel.style.width == "30%" ? "100%" : "30%"; 
            listPanel.style.borderRadius = listPanel.style.borderRadius == "7px 0px 0px 7px" ? "7px 7px 7px 7px" : "7px 0px 0px 7px";
        } else {
            describePanel.style.display = "inline";
            moveBar.style.display = "inline";
            listPanel.style.width = "30%";
            listPanel.style.borderRadius = "7px 0px 0px 7px";
            describePanel.style.width = "70%";
        }
        
        this.setState({cur: {name: name, description: description, id: id}});
    }

    onChangeRecord(item) {
        this.props.handleChangeRecord(item);
    }

    temp(event) {
        console.log("hello" + event.x);
        
    }

    render() {

        return (
            <div onMouseDownCapture={this.temp} id="toDoPanel">

                <ToDoItems  item={this.props.records} handleTask={this.props.onCompleteTask} handleCurrentRecord={this.handleCurrentRecord} />
                
                <DescribePanel item={this.state.cur} handleChangeRecord={this.props.handleChangeRecord} deleteRecord={this.props.deleteRecord} />
            </div>
        );
    }
}

export default MainView;