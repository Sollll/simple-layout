import React from "react";
import {connect} from "react-redux";
import {getLiveLayoutData} from "../redux/selectors";
import Paper from '@material-ui/core/Paper';

class LiveLayoutData extends React.Component {
  render() {
    let keys = Object.keys(this.props.liveLayoutData);

    let fields = keys.map((key, id) => {
      let fieldId = key;
      let fieldValue = this.props.liveLayoutData[key];
      return (<div key={id}>"{fieldId}": {fieldValue}</div>)
    });
    return (
      <div>
        <b>Live redux updates:</b><br/><br/>
        <Paper>
          {fields}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return getLiveLayoutData(state);
};

export default connect(
  mapStateToProps,
  null
)(LiveLayoutData);
