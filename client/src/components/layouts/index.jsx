import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

export default class Index extends Component {
  render() {
    return (
      <div>
     
        <Navbar />
        <Outlet />
      </div>
    );
  }
}
