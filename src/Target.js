import React, {PropTypes, Component} from 'react';

export default class Target extends Component {
  static propTypes = {};

  constructor(props) {
    super(props)
    this.state = { over: false }
  }

  mouseover = (e) => {
    console.log(`OVER! ${this.props.name || 'unamed'}`);
    e.stopPropagation()
    this.setState({ over: true })
  }

  mouseleave = (e) => {
    console.log(`=-=-=-=- OUT! ${this.props.name || 'unamed'}`);
    if (this.state.over)
      this.setState({ over: false })

    // e.stopPropagation()
  }

  render() {
    let style = { background: 'white', border: '1px solid black' }
    const { over } = this.state

    if (over)
      style = { ...style, background: 'red' }

    return (
      <div style={style} onMouseOver={this.mouseover} onMouseLeave={this.mouseleave}>
        {this.props.children}
      </div>
    );
  }
}
