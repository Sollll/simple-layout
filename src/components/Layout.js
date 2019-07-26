import React from 'react';
import Row from './Row'
import DataContext from "../dataContext";
import {getLayoutData} from "../redux/selectors";
import {connect} from "react-redux";

class Layout extends React.Component {

  render() {
    let rowsAvailable, rowsToRender = [];
    rowsAvailable = !!(this.props.schema && this.props.schema.rows && this.props.schema.rows.length);

    if (rowsAvailable) {
      rowsToRender = this.props.schema.rows.map((item, index) => {
        return (
          <Row key={index} columns={item.columns} type={this.props.type}/>
        )
      })
    }
    return (
      <div>
        {rowsAvailable ?
          rowsToRender
          :
          (<h3>No rows in layout</h3>)
        }
        <br/>
      </div>
    )
  }
}

Layout.contextType = DataContext;

const mapStateToProps = state => {
  return getLayoutData(state);
};

export default connect(
  mapStateToProps,
  null
)(Layout);
