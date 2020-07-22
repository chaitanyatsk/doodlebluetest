import React, { Component } from 'react';
//import './test.css';
// import { Chat } from 'react-chat-popup';
// import Modal from "./Modal";
import User from './User';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				new User('Raghav', 'Tester'),
				new User('Bablu', 'Coder'),
				new User('Chaitanya', 'Lead'),
				new User('Bobby', 'Tech lead'),
			],
			loggedinUser: 'Raghav',
			selectedUser: '',
		};
		this.onLoginChange = this.onLoginChange.bind(this);
		this.showUserDetails = this.showUserDetails.bind(this);
	}

	onLoginChange(event) {
		this.setState({ loggedinUser: event.target.value, selectedUser: '' });
	}

	showUserDetails(userName) {
		this.setState({ selectedUser: userName });
	}

	render() {
		return (
			<form>
				<label>
					Pick your User:
					<select
						onChange={this.onLoginChange}
						value={this.state.loggedinUser}>
						{this.state.users.map((item) => {
							return (
								<option key={item.name}> {item.name} </option>
							);
						})}
					</select>
				</label>
				<table
					width='100%'
					style={{ backgroundColor: 'lightgray', border: 1 }}>
					<tbody>
						<tr>
							<td>
								<table
									style={{
										backgroundColor: 'white',
										width: '50%',
									}}>
									<tbody>
										{this.state.users.map((user) => {
											return user.name ===
												this.state
													.loggedinUser ? null : (
												<tr
													key={user.name}
													style={{
														backgroundColor:
															this.state
																.selectedUser ===
															user.name
																? 'pink'
																: 'white',
													}}>
													<td
														onClick={() => {
															this.showUserDetails(
																user.name,
															);
														}}>
														{user.name}
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</td>
							<td>
								<table
									style={{
										width: '50%',
									}}>
									<tbody>
										{this.state.users.map((user) => {
											return user.name !==
												this.state
													.selectedUser ? null : (
												<tr key={user.name}>
													<td>{user.details}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		);
	}
}

export default Home;
