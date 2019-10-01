import React, { Component } from 'react';
import { css } from "aphrodite";
import styles from './main.styles';
import catContainer from '../catContainer/catContainer'

class Main extends Component {
  render() {
    return (
      <div>
      <h1 className={css(styles.Container)}>"Hello"</h1>
      <catContainer />
      </div>
    )
  }
}

export default Main