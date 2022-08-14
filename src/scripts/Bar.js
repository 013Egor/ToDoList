import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Bar extends React.Component {

    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

        this.handleAddButton = this.handleAddButton.bind(this);
    }

    handleAddButton(event) {
        this.props.openToDoForm();
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
      }
      

    render() {
        return (
            <div id="highBar">
                <div id="blockSearch">
                    <p id="searchName">Поиск:</p>
                    <input type="text" id="search" value={this.props.filterText}
          onChange={this.handleFilterTextChange}/>
                </div>
                <button id="addToDo" onClick={this.handleAddButton}>Добавить заметку</button>
            </div>
        );
    }
}

export default Bar;