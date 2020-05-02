import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaTrashAlt } from 'react-icons/fa'
export class TodoItem extends Component {
	get_style = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}
	render() {
		return (
			<div style={this.get_style()}>
				<p>
					<label className="container">
						<input
							type="checkbox"
							onChange={this.props.markComplete.bind(this, this.props.todo.id)}
						/>
					</label>{' '}
					{this.props.todo.title}
					<button
						style={btn_style}
						onClick={this.props.delete.bind(this, this.props.todo.id)}
					>
						<FaTrashAlt />
					</button>
				</p>
			</div>
		)
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

const btn_style = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem
