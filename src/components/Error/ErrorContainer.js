import React from 'react';

import Error from './Error';
export class ErrorContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.error = setInterval(() => this.props.unError(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.error);
  }
  render() {
    return <Error />;
  }
}
