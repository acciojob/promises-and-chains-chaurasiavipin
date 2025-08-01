


const submimtbtn=document.getElementById("btn")
submimtbtn.addEventListener('click', () => {
 	const input1=parseInt(document.getElementById("age").value);
const input2=document.getElementById("name").value.trim();	
					
	let promis=new Promise((resolve,reject) => {
	if(isNaN(input1) || input2== ""){
		reject("Please enter valid details.")
		return;
	}
		setTimeout(() => {
		if( input1>=18){
		resolve(input2)
		}
		else{
			reject(input2)
		}
	
	}, 4000)	
	
});
 promis.then(function (userName) {
    alert(`Welcome, ${userName}. You can vote.`);
  }).catch(function (own) {
	 if (own === "Please enter valid details.") {
      alert(own);
	 }
		 else{
    alert(`Oh sorry, ${own}. You aren't old enough.`);
	 }
});
});