


const submimtbtn=document.getElementById("btn")
 

submimtbtn.addEventListener('click', ()=> {
							
	const input1=parseInt(document.getElementById("age").value);
const input2=document.getElementById("name").value;						
	let promis=new Promise((resolve,reject)=> {
	if(input1 == "" || input2== ""){
		alert("Please enter valid details.")
		return;
	}
		
	setTimeout(()=> {
		if( input1>=18){
		resolve(input1)
		}
		else{
			reject(input2)
		}
	
	}, 4000)	
	
})
 promis.then(function (userName) {
    alert(`Welcome, ${userName}. You can vote.`);
  }).catch(function (own) {
    alert(`Oh sorry, ${own}. You aren't old enough.`);
 
});
})