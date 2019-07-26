import React from "react";
import Layout from "./Layout";
import layoutConfig from "../layoutConfig";
import {getLayoutData} from "../redux/selectors";
import {connect} from "react-redux";

class DataFromStore extends React.Component {
  render() {
    let dataSaved = this.props.layoutData && Object.keys(this.props.layoutData)
      && Object.keys(this.props.layoutData).length;
    return (
      <div>
        <h4>Data in redux store: {dataSaved ? '':(<i>Nothing saved yet</i>)}</h4>
        {dataSaved ? (
          <Layout schema={layoutConfig.schema} type='show'/>
        ) : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return getLayoutData(state);
};

export default connect(
  mapStateToProps,
  null
)(DataFromStore);
