let pets = [];

function Pet(name, species, breed, age, color, owner) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.age = age;
  this.color = color;
  this.owner = owner;

  this.describe = function () {
    return `Pet: ${this.name}, Species: ${this.species}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}, Owner: ${this.owner}`;
  };
}

function addPet() {
  const name = document.getElementById("petName").value.trim();
  const species = document.getElementById("species").value.trim();
  const breed = document.getElementById("breed").value.trim();
  const age = document.getElementById("age").value.trim();
  const color = document.getElementById("color").value.trim();
  const owner = document.getElementById("owner").value.trim();

  if (name && species && breed && age && color && owner) {
    const newPet = new Pet(name, species, breed, age, color, owner);
    pets.push(newPet);
    resetForm();
    showPets();
  } else {
    alert("Please fill out all fields.");
  }
}

function resetForm() {
  document.getElementById("petName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";
  document.getElementById("age").value = "";
  document.getElementById("color").value = "";
  document.getElementById("owner").value = "";
}

function showPets() {
  const list = document.getElementById("petList");
  list.innerHTML = "";

  pets.forEach(pet => {
    const p = document.createElement("p");
    p.textContent = pet.describe();
    list.appendChild(p);
  });
}

function clearList() {
  document.getElementById("petList").innerHTML = "";
}

function searchPet() {
  const searchTerm = document.getElementById("searchPet").value.toLowerCase().trim();
  const list = document.getElementById("petList");
  list.innerHTML = "";

  const results = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm)
  );

  if (results.length > 0) {
    results.forEach(pet => {
      const p = document.createElement("p");
      p.textContent = pet.describe();
      list.appendChild(p);
    });
  } else {
    list.innerHTML = "<p>No pet found.</p>";
  }
}
