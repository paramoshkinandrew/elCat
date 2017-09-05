import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import noop from 'lodash/noop';
import ModelInfo from './model-info';
import {getModelData} from './actions';

// import {Link} from 'react-router';
const modelId = 555;

@connect(mapStateToProps, mapDispatchToProps)
export class Model extends Component {
    render() {
        return (
            <ModelInfo modelId={modelId} load={this.props.loadModelData} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadModelData: () => dispatch(getModelData(modelId))
    };
}

function mapStateToProps(state) {
    return state;
}

Model.propTypes = {
    loadModelData: PropTypes.func
};
//
// Model.defaultProps = {
//     loadModelData: noop
// };
