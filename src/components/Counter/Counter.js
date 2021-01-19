import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
// import * as actions from '../../redux/actions';
import * as actions from '../../redux/counter/counter-actions';
import store from '../../redux/store';
// import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

// class Counter extends Component {
//   //   static defaultProps = {
//   //     initialValue: 0,
//   //   };

//   //   static propTypes = {
//   //     //
//   //   };

//   //   state = {
//   //     value: this.props.initialValue,
//   //   };

//   //   handleIncrement = () => {
//   //     this.setState(prevState => ({
//   //       value: prevState.value + 1,
//   //     }));
//   //   };

//   //   handleDecrement = () => {
//   //     this.setState(prevState => ({
//   //       value: prevState.value - 1,
//   //     }));
//   //   };

//   render() {
//     // const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
