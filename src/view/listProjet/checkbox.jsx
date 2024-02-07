import React, { Component } from "react";

export default class Checkbox extends Component {
    render() {
    const { id, title, name, handleChange, checked } = this.props;

    return (
        <div className="checkbox-container">
            <input
                id={id}
                type="checkbox"
                name={name}
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor={id} className={`${id}-color`}>{title}</label>
        </div>
        );
    }
}
