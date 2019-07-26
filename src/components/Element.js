import React from 'react';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import DataContext from '../dataContext';

import {connect} from "react-redux";
import {getLayoutData} from "../redux/selectors";
import {liveUpdateField} from "../redux/actions";

export class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.handleChange(this.props.element.defaultValue);
  }

  handleChange(value) {
    this.context.updateField(this.props.element.id, value);
    this.setState({
      currentValue: value
    })
    this.props.liveUpdateField(this.props.element.id, value);
  }

  render() {
    return (
      <DataContext.Consumer>
        {
          context => {
            if (this.props.type === 'edit') {
              return (
                <TextField
                  variant="outlined"
                  id={this.props.element.id}
                  label={this.props.element.id}
                  type={this.props.element.type}
                  value={this.state.currentValue}
                  onChange={event => {
                    this.handleChange(event.target.value);
                  }}
                  margin="normal"
                />
              )
            } else {
              return (
                <Paper>{this.props.element.id + ': ' + this.props.layoutData[this.props.element.id]}</Paper>
              )
            }
          }
        }
      </DataContext.Consumer>

    )
  }
}

Element.contextType = DataContext;

const mapStateToProps = state => {
  return getLayoutData(state);
};

export default connect(
  mapStateToProps,
  {liveUpdateField}
)(Element);


