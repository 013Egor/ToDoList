import React from "react";

class DescribePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cur: {name: "", description: "", id: undefined}
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChangeDescription(event) {
        this.setState({cur: {name: this.state.cur.name, description: event.target.value, id: this.state.cur.id}});
    }

    handleChangeName(event) {
        this.setState({cur: {name: event.target.value, description: this.state.cur.description, id: this.state.cur.id}});
    }

    handleDelete() {
        this.props.deleteRecord(this.state.cur.id);
        document.getElementById("toDoDescribe").style.display = "none";
        var listPanel = document.getElementById("toDoList");
        listPanel.style.width = "100%";
        listPanel.style.borderRadius = "7px 7px 7px 7px";
    }

    handleSave() {
        this.props.handleChangeRecord(this.state.cur);
    }

    static getDerivedStateFromProps(props, state) {

        if (state.cur.id !== props.item.id) {
            return {
                cur: props.item
            }
        }

        return null;
    }
    
    render () {
        
        return (
            <div id="toDoDescribe">
                <div className="changeName">
                    <p id="changeName">Название: </p>
                    <input type="text" id="toDoNameChange" value={this.state.cur.name} onChange={this.handleChangeName} />
                    <i className="fa-solid fa-trash-can" id="trash" onClick={this.handleDelete}></i>
                </div>
                <div id="textField">
                    <p id="describeName">Описание:</p>
                    <textarea name="" id="textArea" cols="30" rows="10" value={this.state.cur.description} onChange={this.handleChangeDescription}></textarea>
                </div>
                <button type="button" onClick={this.handleSave} >Сохранить</button>
            </div>
        );
    }
}

export default DescribePanel;