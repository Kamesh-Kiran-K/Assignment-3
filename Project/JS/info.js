document.getElementById("mybutton").addEventListener("click", function() {
    window.location.href = "../HTML/home.html";
  });


const jsonData = [
	{
		"flight": "12345",
		"destination": "New York",
		"departure_date": "2024-03-12",
		"arrival_date": "2024-03-15",
		"departure_time": "1:05 AM",
		"arrival_time": "12:05 AM",
		"carrier": "Airline 1"
	},
	{
		"flight": "65783",
		"destination": "Los Angeles",
		"departure_date": "2024-03-12",
		"arrival_date": "2024-03-15",
		"departure_time": "10:30 AM",
		"arrival_time": "9:05 AM",
		"carrier": "Airline 2"
	},
	{
		"flight": "64839",
		"destination": "Los Angeles",
		"departure_date": "2024-03-12",
		"arrival_date": "2024-03-15",
		"departure_time": "13:20 PM",
		"arrival_time": "12:05 PM",
		"carrier": "Airline 3"
	},
	{
		"flight": "83939",
		"destination": "New York",
		"departure_date": "2024-03-12",
		"arrival_date": "2024-03-15",
		"departure_time": "18:25 PM",
		"arrival_time": "15:15 PM",
		"carrier": "Airline 4"
	}
];

document.getElementById('search-form')
.addEventListener('submit', function(event) {
	 event.preventDefault(); 
	 const destination = document.getElementById('destination').value; 
	 const filteredFlights = jsonData.filter(flight => flight.destination === destination); 
	 document.getElementById("table-container").style.display = "block";
	 const tableBody = document.getElementById('flightsTable').getElementsByTagName('tbody')[0];
	  tableBody.innerHTML = ''; 
	  filteredFlights.forEach(flight => { const row = document.createElement('tr'); 
	  Object.values(flight).forEach(value => { const cell = document.createElement('td'); 
	  cell.textContent = value; 
	  row.appendChild(cell); 
	});
	   tableBody.appendChild(row); 
	   }); 
	   }); 