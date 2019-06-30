import React from "react";
import { connect } from "react-redux";
import SortBy from "../components/SortBy.js";
import { sortColors } from "../actions/actions.js";

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSort(sortBy) {
            dispatch(sortColors(sortBy));
        }
    }
}

class SortContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
            sortMenuVisible: false
        }
    }

    handleClick() {
        if (!this.state.sortMenuVisible) {
            document.addEventListener('click', this.handleOutsideClick);
        } else {
            document.removeEventListener('click', this.handleOutsideClick);
        }

        this.setState(prevState => ({
            sortMenuVisible: !prevState.sortMenuVisible,
         }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }
          
        this.handleClick();
    }
    render() {
        return <SortBy 
                    sort={this.props.sort} 
                    onSort={(value) => this.props.onSort(value)} 
                    isVisible={this.state.sortMenuVisible}
                    onClick={this.handleClick}
                    sortRef={node => {this.node = node}}
                />
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortContainer);