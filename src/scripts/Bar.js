import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Bar extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddButton = this.handleAddButton.bind(this);
    }

    handleAddButton(event) {
        this.props.openToDoForm();
    }

    render() {
        return (
            <div id="highBar">
                <div id="blockSearch">
                    <p id="searchName">Поиск:</p>
                    <input type="text" id="search" />
                </div>
                <button id="addToDo" onClick={this.handleAddButton}>Добавить заметку</button>
            </div>
        );
    }
}

export default Bar;