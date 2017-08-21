import React from "react";
import { connect } from "react-redux";

import fetchData from "../actions/fetch_data";
import "./styles.css";
import AstronomyCard from "./AstronomyCard";

class AstronomyContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <AstronomyCard data={this.props.astronomy} />;
  }
}

const mapStateToProps = state => ({
  astronomy: state.astronomy
});

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);
