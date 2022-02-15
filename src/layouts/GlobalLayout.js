/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import './GlobalLayout.less';
import images from '../theme/images';
import { Link } from 'dva/router';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    goToRoute(path, callback) {
      dispatch({ type: 'global/goToRoute', path, callback });
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class GlobalLayout extends Component {
      state = {};

      componentDidMount = () => {};

      render() {
        const { children } = this.props;
        return (
          <div>
            <div>123</div>
          </div>
        );
      }
    },
  ),
);
