import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../../components/Counter';
import * as CounterActions from '../../redux/actions';

interface StateType {
  counter: number;
}

const mapStateToProps = (state: StateType) => ({
  counter: state.counter
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators<any>(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
