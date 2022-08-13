import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

var BORDER_SIZE = 4;
var prevX;

function resize(e) {
        
    var left = document.getElementById("toDoList");
    var block = document.getElementById("toDoPanel");
    var right = document.getElementById("toDoDescribe");
    const dx = e.x - prevX;
    prevX = e.x;
    
    let leftSize = (parseInt(getComputedStyle(left, '').width) + dx); 
    let blockSize = parseInt(getComputedStyle(block, '').width); 
    left.style.width = leftSize + "px";
    right.style.width = (blockSize - leftSize) + "px";
}

class ToDoItems extends React.Component {
    constructor(props) {
        super(props);

        this.handleBackTask = this.handleBackTask.bind(this);
        this.handleBeginTask = this.handleBeginTask.bind(this);
        this.handleCurrentRecord = this.handleCurrentRecord.bind(this);
        this.addListener = this.addListener.bind(this);
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

    addListener(event) {
        var center = document.getElementById("moveBar"); 

        center.addEventListener("mousedown", function(e) {
          if (e.offsetX < BORDER_SIZE) {
            prevX = e.x;
            document.addEventListener("mousemove", resize, false);
          }
        }, false);
        
        document.addEventListener("mouseup", function() {
            document.removeEventListener("mousemove", resize, false);
        }, false);
    }

    render() {

        return (
            <div id="toDoList">
                <div id="content">
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
                <div onMouseDownCapture={this.addListener} id="moveBar"></div>
            </div>
        );
    }
}

export default ToDoItems;