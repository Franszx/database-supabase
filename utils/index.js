import { getPets, deletePet, updatePet } from "/utils/data.js";

async function showPets() {
  const pets = await getPets();
  console.log(pets);
  console.log(pets.length, "dyr i databasen");
  document.querySelector(".showPets").innerHTML = "";
  pets.forEach((pet) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = pet.name;
    copy.querySelector(".race").textContent = pet.race;
    copy.querySelector(".species").textContent = pet.species;
    copy.querySelector(".status").textContent = pet.isAlive;
    copy.querySelector(".dob").textContent = pet.dob;
    copy.querySelector(".activity").textContent = pet.activityLevel;

    const deleteButton = copy.querySelector("button[data-action='delete']");
    deleteButton.dataset.id = pet.id;
    const updateButton = copy.querySelector("button[data-action='update']");
    updateButton.dataset.id = pet.id;

    deleteButton.addEventListener("click", async (e) => {
      await deletePet(pet.id);
      showPets();
    });
    updateButton.addEventListener("click", async (e) => {
      console.log(pet.id, "skal opdateres");
      await updatePet(pet.id);
      showPets();
    });
    document.querySelector(".showPets").appendChild(copy);
  });
}

showPets();

wrapper.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
    toggleBtn(e.target);
  }
});
