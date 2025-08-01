


const submimtbtn=document.getElementById("btn")
 

submimtbtn.addEventListener('click', ()=>{
							
	const input1=parseInt(document.getElementById("age").value);
const input2=document.getElementById("name").value;						
	let promis=new Promise((resolve,reject)=> {
	
	setTimeout(()=>{
		if(input1 !="" && input1>=18){
		resolve(input1)
		}
		else{
			reject(input1)
		}
		
	}, 4000)	
})
 promis.then(function (userName) {
    alert(`Welcome, ${userName}. You can vote.`);
  }).catch(function (userName) {
    alert(`Oh sorry ${userName}. You aren't old enough.`);
  });
});
})