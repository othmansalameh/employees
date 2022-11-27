// let form = document.getElementById("form");
// form.addEventListener("submit", handleSubmit);


// function handleSubmit(e) {
//   e.preventDefault();
//   let name = e.target.name.value;
//   let age = e.target.age.value;
//   let position = e.target.position.value;
//   let experience = e.target.experience.value;
//   let hobbies = [];

//   e.target.hobbies.forEach((element) => {
//     if (element.checked) {
//       hobbies.push(element.value);
//     }
//   });

// function addrow([...args]) {
//   let tableBody = document.getElementById("table-body");
//   let row = document.createElement("tr");

//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let td4 = document.createElement("td");
//     let td5 = document.createElement("td");

//     td1.innerHTML = args[0];
//     td2.innerHTML = args[1];
//     td3.innerHTML = position;
//     td4.innerHTML = experience;
//     td5.innerHTML = hobbies;

//     row.appendChild(td1);
//     row.appendChild(td2);
//     row.appendChild(td3);
//     row.appendChild(td4);
//     row.appendChild(td5);

//   tableBody.appendChild(row);

// }
// addrow([name, age, position, experience, hobbies]);
// }

//
//// نفس الشيء لاكن الطريقة مختلفة //////
//

 let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function addrow([...args]) {
  let tableBody = document.getElementById("table-body");
  let row = document.createElement("tr");

  args.map((arg) => {
    if (typeof arg === "object") {
      let td = document.createElement("td");
      td.innerHTML = arg.join(",");
      row.appendChild(td);
    } else {
      let td = document.createElement("td");
      td.innerHTML = arg;
      row.appendChild(td);
    }
  });
  tableBody.appendChild(row);
}

function handleSubmit(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let age = e.target.age.value;
  let position = e.target.position.value;
  let experience = e.target.experience.value;
  let hobbies = [];

  e.target.hobbies.forEach((element) => {
    if (element.checked) {
      // console.log(element.value);
      hobbies.push(element.value);
    }
  });

  addrow([name, age, position, experience, hobbies]);
}







