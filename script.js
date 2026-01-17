function calculateAge() {
  const dob = document.getElementById("dob").value;
  const currentDate = document.getElementById("currentDate").value;

  if (dob === "" || currentDate === "") {
    document.getElementById("result").innerText = "Please select both dates";
    return;
  }

   birthDate = new Date(dob);
   today = new Date(currentDate);

  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || 
     (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("result").innerText =
    "Your age is " + age + " years";
}