const diseases = [
  {
    name: "Anthrax",
    symptoms: "Sudden death, bleeding",
    treatment: "Antibiotics"
  },
  {
    name: "FMD",
    symptoms: "Mouth wounds, saliva",
    treatment: "Supportive care"
  },
  {
    name: "PPR",
    symptoms: "Fever, diarrhea",
    treatment: "Supportive care"
  },
  {
    name: "Rabies",
    symptoms: "Aggression, biting",
    treatment: "No cure"
  },
  {
    name: "Mastitis",
    symptoms: "Udder swelling",
    treatment: "Antibiotics"
  }
];

const list = document.getElementById("diseaseList");

function display(data) {
  list.innerHTML = "";
  data.forEach(d => {
    list.innerHTML += `
      <div class=\"card\">\n        <h3>[0;32m${d.name}[0m</h3>\n        <p><b>Symptoms:</b> ${d.symptoms}</p>\n        <p><b>Treatment:</b> ${d.treatment}</p>\n      </div>\n    `;
  });
}

display(diseases);

document.getElementById("search").addEventListener("input", function() {
  const value = this.value.toLowerCase();
  const filtered = diseases.filter(d =>
    d.name.toLowerCase().includes(value)
  );
  display(filtered);
});