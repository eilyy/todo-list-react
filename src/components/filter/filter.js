import React from "react";
import {connect} from "react-redux";
import {filterSwitched} from "../../redux/actions/actions";

import {Switch, withStyles} from "@material-ui/core";
import "./filter.scss"

const BlueSwitch = withStyles({
    switchBase: {
        color: "#9a9a9a",
        border: "#0d6efd",
        '&:hover': {
            backgroundColor: 'rgba(124,124,124,0.1)',
        },
        '&$checked': {
            color: "#3285ff",
            '&:hover': {
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
            }
        },
        '&$checked + $track': {
            backgroundColor: "#0d6efd",
        },
    },
    checked: {},
    track: {
        backgroundColor: "grey"
    }
})(Switch);

const Filter = (props) => {
    const onFilter = (evt) => {
        props.filterSwitched(evt.target.checked);
    }

    return (
        <div className="filter">
            {props.lang === 'English' ? 'all' : 'все'}
            <BlueSwitch onChange={onFilter}/>
            {props.lang === 'English' ? 'fav' : 'изб'}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang
    }
}

const mapDispatchToProps = {
    filterSwitched
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);