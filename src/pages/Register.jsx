import Add from "../img/addAvatar.png";
const Register = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Chat App</span>
				<span className="title">Register</span>
				<form action="">
					<input
						type="text"
						placeholder="Display name"
					/>
					<input
						type="email"
						placeholder="email"
					/>
					<input
						type="password"
						placeholder="enter password"
					/>
					<input
						type="file"
						id="file"
						style={{ display: "none" }}
					/>
					<label htmlFor="file">
						<img
							src={Add}
							alt=""
						/>
						<span>Add an avatar</span>
					</label>
					<button>Sign Up</button>
				</form>
				<p>You do have an account? login</p>
			</div>
		</div>
	);
};

export default Register;
