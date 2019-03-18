import React, { Component, Fragment, Suspense } from 'react';
import Container, {Title, List, AddNewItem} from '../container'
import {getGroupId, getUserId, getlistArr, editListArr} from '../../dataService' 
import './index.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: '',
            userId: '',
            listArr: {},
            loading: true,
        }
    }

    componentDidMount() {
        let gotIDS = new Promise((resolve) => {
            getGroupId().then((res) => {
                this.setState({ groupId: res.data.groupId });
                getUserId().then((res) => {
                    this.setState({ userId: res.data.userId }, () => resolve());
                });
            });
        });
        gotIDS.then(
            () => {
                getlistArr(this.state.groupId, this.state.userId).then((res) => {
                    this.setState(() =>{
                        return { listArr: res.data, loading: false };
                    });
                });
            }
        )
    };

    addNewItem = (type, newVal) => {
        if(newVal) {
            let listArr = {...this.state.listArr};
            listArr[type].push(newVal);
            this.setState(() => {
                return { listArr }
            }, () => {
                editListArr(this.state.groupId, this.state.userId, this.state.listArr)
            })
        }
    }

    editListItem = (type, i, newVal) => {
        let listArr = {...this.state.listArr};
        if(listArr[type][i] !== newVal) {
            listArr[type][i] = newVal;
            this.setState(() => {
                return { listArr }
            }, () => {
                editListArr(this.state.groupId, this.state.userId, this.state.listArr)
            })
        }
    }

    removeItem = (type, index) => {
        let listArr = {...this.state.listArr};
        listArr[type].splice(index, 1);;
        this.setState(() => {
            return { listArr }
        }, () => {
            editListArr(this.state.groupId, this.state.userId, this.state.listArr)
        })
    }

  render() {
    return (
        <Fragment>
            <Container>
                <Title 
                    title="Pro's"
                />
                {this.state.loading ? 
                <img src="loading.gif"/> : 
                <List 
                    listArr={this.state.listArr.pros} 
                    removeItem={this.removeItem} 
                    editListItem={this.editListItem}
                    type="pros"
                />}
                <AddNewItem 
                    addNewItem={this.addNewItem} 
                    type="pros"
                />
            </Container>
            <Container>
                <Title 
                    title="Con's"
                />
                {this.state.loading ? 
                <img src="loading.gif"/> : 
                <List 
                    listArr={this.state.listArr.cons} 
                    removeItem={this.removeItem} 
                    editListItem={this.editListItem}
                    type="cons"
                />}
                <AddNewItem 
                    addNewItem={this.addNewItem} 
                    type="cons"
                />
            </Container>
        </Fragment>
    );
  }
}

export default App;
