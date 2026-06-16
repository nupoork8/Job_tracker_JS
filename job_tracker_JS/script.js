const applications = [];

const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");
const statusInput = document.getElementById("status");
const addBtn = document.getElementById("addBtn");
const applicationsContainer = document.getElementById("applications");

addBtn.addEventListener("click", () => {
  if (companyInput.value.trim() === "" || roleInput.value.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  const application = {
    company: companyInput.value,
    role: roleInput.value,
    status: statusInput.value,
  };

  applications.push(application);

  console.log(applications);

  const card = document.createElement("div");
  card.classList.add("card");

  if (application.status === "Applied") {
    card.classList.add("status-applied");
  } else if (application.status === "Interview") {
    card.classList.add("status-interview");
  } else {
    card.classList.add("status-rejected");
  }

  card.innerHTML = `
    <p><strong>Company:</strong> ${application.company}</p>

    <p><strong>Role:</strong> ${application.role}</p>

    <p>
      <strong>Status:</strong>
      <span class="status-badge status-${application.status.toLowerCase()}">
        ${application.status}
      </span>
    </p>

    <button class="delete-btn">
      Delete
    </button>
  `;

  const deleteBtn = card.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  applicationsContainer.appendChild(card);

  companyInput.value = "";
  roleInput.value = "";
  statusInput.value = "Applied";
});
