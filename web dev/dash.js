// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};



// Add event listeners for profile management buttons
document.getElementById('editProfileBtn').addEventListener('click', function() {
    // Handle edit profile button click
    console.log('Edit Profile button clicked');
});

document.getElementById('changePasswordBtn').addEventListener('click', function() {
    // Handle change password button click
    console.log('Change Password button clicked');
});

// Update community involvement data (simulated)
document.getElementById('communityHours').textContent = '15 hours';
document.getElementById('urbanFarmingActivities').textContent = '8 activities';

const chartData = {
    labels: ["Gardening", "Farming", "Eduational Workshops", "Collaborative Projects", "Community Outreach"],
    data: [30, 20, 10, 17, 36],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Popularity",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
      ul.appendChild(li);
    });
  };
  
  populateUl();
