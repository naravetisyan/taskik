import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Icon} from 'semantic-ui-react';
import './index.css';

class AddNewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }
    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    editListArr = () => {
        this.props.addNewItem(this.props.type, this.state.inputValue)
        this.setState({inputValue: ''})
    }
    render() {
    return (
        <div>
            <Input 
                className='inp'
                onChange={this.handleInputChange} 
                placeholder='Add new item...'
                value={this.state.inputValue}
            /> 
            <Button icon onClick={this.editListArr}>
                <Icon name='plus' />
            </Button>
        </div>
    );
  }
}
AddNewItem.propTypes = {
    addNewItem: PropTypes.func,
    type: PropTypes.string,
};
export default AddNewItem;
