import react from 'react';

function Alert(props){

	const demo = (word) =>{

		const lower = word.toLowerCase();

		return lower.charAt(0).toUpperCase() + lower.slice(1);
	}

	return(
			<>
			<div style = {{height: "50px"}} className = "mx-3 mt-2">
				{props.alert &&
			 		<div className={`alert alert-${props.alert.type} text-start alert-dismissible fade show`} role="alert">
						<strong>{demo(props.alert.type)}</strong>: {props.alert.msg}
					</div>
				}
			</div>

		</>

	);

}

export default Alert;