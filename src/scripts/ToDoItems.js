import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class ToDoItems extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleBackTask = this.handleBackTask.bind(this);
        this.handleBeginTask = this.handleBeginTask.bind(this);
        this.handleCurrentRecord = this.handleCurrentRecord.bind(this);
    }

    handleBackTask(e, id, status) {
        var nextStatus = status == "finished" ? "process" : "wait";
        document.getElementById(`begin${id}`).style.display = "inline";
        if (nextStatus == "wait") {
            document.getElementById(`back${id}`).style.display = "none";
        }
        this.props.handleTask(id, nextStatus);

    }

    handleBeginTask(e, id, status) {
        var nextStatus = status == "wait" ? "process" : "finished";
        document.getElementById(`back${id}`).style.display = "inline";
        if (nextStatus == "finished") {
            document.getElementById(`begin${id}`).style.display = "none";
        }
        this.props.handleTask(id, nextStatus);
    }

    handleCurrentRecord(event, item) {
        this.props.handleCurrentRecord(item.name, item.description, item.id);
    }

    render() {

        return (
            <div id="toDoList">
                
                {this.props.item.map(d => {
                  return (
                    <div key={d.id} className={"toDoItem " + d.status} id={`toDoName${d.id}`}>
                        <i class="fa-solid fa-ellipsis-vertical dots"></i>
                        <p className="toDoName" onClick={(event) => this.handleCurrentRecord(event, d)}>{d.name}</p>
                        <div className="itemButtons">
                                <i className="fa-solid fa-play takeTodo" id={`begin${d.id}`} onClick={event => this.handleBeginTask(event, d.id, d.status)}></i>
                                <i class="fa-solid fa-rotate-left backToDo" id={`back${d.id}`} onClick={event => this.handleBackTask(event, d.id, d.status)}></i>
                        </div>
                    </div>)
                })}
            </div>
        );
    }
}

export default ToDoItems;