import React from 'react';
import PropTypes from 'prop-types';
import List from './list'
import Title from './title'
import AddNewItem from './add_new_item'
import './index.css'

const Table = ({ children }) => {
   const childrenArray = React.Children.map(children, (child) => {
      return child;
   });
   return (
      <div className='container'>{ childrenArray }</div>
   );
}

Table.propTypes = {
   children: PropTypes.array,
};

 export {
    List,
    Title,
    AddNewItem,
};

export default Table;