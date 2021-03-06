import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Icon, Label, Input, Button} from 'semantic-ui-react';
import './index.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: null,
            inputVal: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({inputVal: e.target.value})
    }

  
    saveEditedItem = (type, i, inputVal) => {
        this.props.editListItem(type, i, inputVal);
        this.setState({open: null})
    }

    removeItem = (type, i) => {
        this.setState({open: null}, () => {
            this.props.removeItem(type,i)
        })
    }

    render() {
        let { listArr, type } = this.props;
        return (
            <div className='list'>
                {listArr && listArr.map((item,i) => {
                    return (
                        <div key={i} className="list-item" >
                            {this.state.open === i ? 
                                (
                                    <Fragment>
                                        <Input 
                                            className='changeable'
                                            value={this.state.inputVal}
                                            onChange={this.handleInputChange}
                                        />
                                        <Button icon color='green' onClick={ () => this.saveEditedItem(type, i , this.state.inputVal)}>
                                            <Icon name='check' />
                                        </Button>
                                        <Button icon color='red' onClick={() => this.setState({open: null})}>
                                            <Icon name='dont' />
                                        </Button>
                                    </Fragment>
                                ) : 
                                (<Label size='huge'>
                                    <div 
                                        className="div-item"
                                        onClick={() => this.setState({open: i, inputVal: item})}>
                                        {item}
                                    </div>
                                    <Icon                                         
                                        name='delete' 
                                        className="delete" 
                                        onClick={ () => this.removeItem(type, i) }
                                    />
                                </Label>)
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}

List.propTypes = {
    listArr: PropTypes.array,
    removeItem: PropTypes.func,
    type: PropTypes.string,
};

export default List;