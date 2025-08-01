<input type="text" id="name" placeholder="Enter your name">
<input type="number" id="age" placeholder="Enter your age">
<button id="btn">Submit</button>

<script>
const submitBtn = document.getElementById("btn");

submitBtn.addEventListener('click', () => {
  const ageInput = document.getElementById("age").value;
  const nameInput = document.getElementById("name").value;

  if (nameInput.trim() === "" || ageInput.trim() === "") {
    alert("Please fill in both name and age!");
    return;
  }

  const age = parseInt(ageInput);

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(nameInput);
      } else {
        reject(nameInput);
      }
    }, 4000);
  });

  promise.then((userName) => {
    alert(`Welcome, ${userName}. You can vote.`);
  }).catch((userName) => {
    alert(`Oh sorry ${userName}. You aren't old enough.`);
  });
});
</script>
