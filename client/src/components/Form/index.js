import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  let handlechange = props.handlechange
  return (
    <div className="form-group">
      <input className="form-control" {...props} onChange={
        handlechange
      } />
    </div>
  );
}

export function TextArea(props) {
  let handlechange = props.handlechange
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} onChange={
        handlechange
      } />
    </div>
  );
}

export function FormBtn(props) {
  let handleclick = props.handleclick
  return (
    <button {...props} onClick={
      handleclick
    } style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
