// var myObject = { name : "Martin", email: "myemail@company.com"};
// console.dir(myObject);

// var qualifications = [
//     {
//        subject : "Maths",
//        grade : "A"
//     },
//     {
//        subject : "English",
//        grade : "B"
//     }, 
//     {
//        subject : "French",
//        grade : "C"
//     },
//     {
//        subject : "Physics",
//        grade : "B"
    
    
//     }
//     ];
// console.dir(qualifications);

(() => {
    //start
    console.info("ready");
    
    
    fetch("data/staff.json")
    .then(response => response.json())
    .then(data => {
        // Work with the parsed data
        console.dir(data);
        const staffTable = document.getElementById("staffTable");
        
        data.forEach((item) => {
            const row = document.createElement("tr");
            const idCell = document.createElement("td");
            const nameCell = document.createElement("td");
            const emailCell = document.createElement("td");
            
            
            // ...
            idCell.textContent = `${item.id}`;
            nameCell.textContent = `${item.first_name} ${item.last_name}`;
            emailCell.textContent = item.email;
            
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            staffTable.appendChild(row);
            
        })
            .catch(error => {
                console.error("Error loading JSON:", error);
                // Handle errors here
        });
    });
    
    //end
})();
