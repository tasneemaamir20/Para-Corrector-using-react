import React from 'react';


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Alert = (props) => {
    return (
      <div style={{height:'50px'}}>
      {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
       <strong>{props.alert.type}</strong>:{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    
      </div>}
      </div>
            )
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
// #endregion

export default Alert;