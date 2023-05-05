function saveInput() {
	var input = document.getElementById("input").value;

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			alert("Input saved successfully!");
			document.getElementById("input").value = "";
		}
	};
	xhr.open("POST", "save_input.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("input=" + input);
}
