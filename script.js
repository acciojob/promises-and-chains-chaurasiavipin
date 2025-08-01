const form = document.getElementById("btn");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  // ✅ Step 1: Input Validation
  if (name === "" || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  // ✅ Step 2: Promise Logic with 4-second delay
  let checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  // ✅ Step 3: Handling the Promise
  checkEligibility
    .then((userName) => {
      alert(`Welcome, ${userName}. You can vote.`);
    })
    .catch((userName) => {
      alert(`Oh sorry ${userName}. You aren't old enough.`);
    });
});
