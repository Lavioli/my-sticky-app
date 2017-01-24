import React from 'react';
import { connect } from 'react-redux';
import { fetchStickies } from '../../actions/actions'
import { deleteSticky } from '../../actions/actions'
import { editSticky } from '../../actions/actions'
import Paper from 'material-ui/Paper'

import EditStickyModal from './EditStickyModal';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';

import formatSticky from '../utils/FormatSticky';


var Sticky = React.createClass({
	getInitialState: function() {
		return {
			highlight: false
		}
	},

	changeState: function() {
		this.setState({
			highlight: !this.state.highlight
		});
	},

	onClickDelete: function(e) {
		e.preventDefault();
		this.props.deleteSticky(this.props.sticky._id);
	},
	formatStickyDynamicHtml: function(text) {
		return {
			__html: text
		}
	},
	render: function() {
		var formattedContent = formatSticky(this.props.sticky.content);
		return (
				<div className="edit_sticky_container" onSubmit={this.onEditSticky}>
					<Paper zDepth={3} className="sticky_container">
						<div id="sticky_container">
							<IconButton 
								id="delete_button"
								tooltip="delete"
        						tooltipPosition="bottom-right"
								onClick={this.onClickDelete} >
								<Delete/>
							</IconButton>
							<EditStickyModal 
								editSticky={this.props.editSticky.bind(this)} 
								sticky={this.props.sticky}
							/>
							<div className="title" rows="2" cols="49" onFocus="" key="0" >{this.props.sticky.title}</div>
							<div className="content"rows="5" cols="47" onClick="" key="1" dangerouslySetInnerHTML={this.formatStickyDynamicHtml(formattedContent)}></div>
						</div>
					</Paper>
				</div>
		);
	}
});

var mapStateToProps = function(state) {
    return {
        currentUser: state.currentUser,
        stickies: state.stickies

    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        deleteSticky: function(stickyId) {
            dispatch(deleteSticky(stickyId));
        },

        editSticky: function(stickyId, title, content) {
            dispatch(editSticky(stickyId, title, content));
        }
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Sticky);