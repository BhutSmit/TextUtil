import react , {useState} from 'react';
import './style.css';

function TextForm(props){

	const [data , setData] = useState("");

	const demo = (e) =>{

		setData(e.target.value);
	}

	const upperCase = (e) =>{

		data == ""?alert("Please Enter Data"):setData(data.toUpperCase());
		props.showAlert("Converted to uppercase", "success");
	}

	const lowerCase = (e) =>{

		data == ""?alert("Please Enter Data"):setData(data.toLowerCase());
		props.showAlert("Converted to lowercase", "success");
	}

	const removeExtraSpace = (e) =>{

		setData(data.split(/[ ]+/).join(" "));
		props.showAlert("Extra remove", "success")
	}

	const copyText = (e) =>{

		var text = document.getElementById("textarea");
		text.select();
		navigator.clipboard.writeText(text.value);
		props.showAlert("Text copied successfully", "success");

	}

	const clearText = (e) =>{

		setData("");
		props.showAlert("Text Cleard successfully !", "success");
	}

	return(

		<>	
		    <h1 className = {`my-4 text-${props.mode == "light"?"dark":"light"} fs-4`}>Try TextUtil - Word Counter , Character Counter , Remove Extra Spaces</h1>
			<div className = "container textform-container">
				<textarea className = {`textarea ${props.mode === "light"?"textarea-light":"textarea-dark"}`} id = "textarea" value = {data} onChange = {demo} placeholder = "Enter text here"></textarea>
				<div className = "button-container">
					<button className = "button" onClick = {upperCase}>Uppercase</button>
					<button className = "button" onClick = {lowerCase}>Lowecase</button>
					<button className = "button" onClick = {removeExtraSpace}>Remove Extra Space</button>
					<button className = "button" onClick = {copyText}>Copy</button>
					<button className = "button" onClick = {clearText}>Clear Text</button>
				</div>
				<div className = {`text-${props.mode == "light"?"dark":"light"}`}>{data.split(" ").filter((ele) => {return ele.length !== 0}).length} {data.split(" ").length > 1?"words": "word"} and {data.length} {data.length > 1?"charaters" : "charater"}</div>
			</div>

		</>

	);
}

export default TextForm;