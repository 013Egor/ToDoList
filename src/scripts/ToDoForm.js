import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import '../styles/modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: ""
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleDescriptionEditing = this.handleDescriptionEditing.bind(this);
        this.handleNameEditing = this.handleNameEditing.bind(this);
    }

    handleSave() {
        this.props.handleAddButton(this.state.name, this.state.description);
        this.props.handleClose();
    }

    handleNameEditing(event) {
        var temp = event.target.value;
        this.setState({name: temp});
    }

    handleDescriptionEditing(event) {
        var temp = event.target.value;
        this.setState({description: temp});
    }

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return (
          <div className={showHideClassName}>
            <section className="modal-main">
              <form className="window" onSubmit={this.handleSubmit}>
                  <div id="dataForm">
                      <p>Название: </p>
                      <hr/>
                      <input type="text" id="newName" value={this.state.name} onChange={this.handleNameEditing}/>
                      <p>Описание: </p>
                      <hr/>
                      <textarea value={this.state.description} onChange={this.handleDescriptionEditing} id="newDescription"></textarea>    
                  </div>
        
                  <div id="buttons">
                      <button type="button" id="closeButton" onClick={this.props.handleClose}>
                        Close
                      </button>
                      
                      <button type="button" id="saveButton" onClick={this.handleSave}>
                        Save
                      </button>
                  </div>    
              </form>
            </section>
          </div>
  );
    }
}

export default Modal;