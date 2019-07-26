import React from "react";
import Layout from "./Layout";
import layoutConfig from "../layoutConfig";
import {connect} from "react-redux";
import {getLayoutData} from "../redux/selectors";
import {updateData} from "../redux/actions";
import Button from '@material-ui/core/Button';

import DataContext from '../dataContext';


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (event) {
    this.props.updateData(this.context.state);
    event.preventDefault();
  };

  render() {

    let actionButtons = [];
    if (layoutConfig && layoutConfig.actions && layoutConfig.actions.length) {
      actionButtons = layoutConfig.actions.map(function (action, index) {
        return (<Button type="submit" key={index} variant="contained" color="primary">
          {action.label}
        </Button>);
      })
    }
    return (
      <DataContext.Consumer>
        {
          context => {
            return (
              <div>
                <h3>Fields:</h3>
                <form onSubmit={this.handleSubmit}>
                  <Layout schema={layoutConfig.schema} type='edit'/>
                  {actionButtons}
                </form>
              </div>
            )
          }
        }
      </DataContext.Consumer>
    );
  }
}

Form.contextType = DataContext;


const mapStateToProps = state => {
  return getLayoutData(state);
};

export default connect(
  mapStateToProps,
  {updateData}
)(Form);
