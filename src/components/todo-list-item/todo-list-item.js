import React, { Component } from "react";
import "./todo-list-item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";

export default class TodoListItem extends Component {

    render() {

        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <div>
                <span className={classNames}>
                    <span
                        className="todo-list-item-label"
                        onClick={onToggleDone}>
                        {label}
                    </span>
                    <div className="btns">
                        <button type={"button"}
                            className={'btn btn-outline-success'}
                            onClick={onToggleImportant}>
                            <FontAwesomeIcon icon={faExclamation} /></button>
                        <button type={"button"}
                            className={"btn btn-outline-danger"}
                            onClick={onDeleted}>
                            <FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                </span>
            </div>
        )

    }
}


