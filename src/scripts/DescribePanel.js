import React from "react";

class DescribePanel extends React.Component {
    
    render () {
        return (
            <div id="toDoDescribe">
                <div className="changeName">
                    <p id="changeName">Название: </p>
                    <input type="text" id="toDoNameChange" />
                    <i className="fa-solid fa-trash-can" id="trash"></i>
                </div>
                <div id="textField">
                    <p id="describeName">Описание:</p>
                    <textarea name="" id="textArea" cols="30" rows="10"></textarea>
                </div>
            </div>
        );
    }
}

export default DescribePanel;