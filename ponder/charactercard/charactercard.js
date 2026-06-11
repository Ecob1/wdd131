const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 6,
  health: 100,
  image: "snortleblat.png",

  attacked: function () {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died`);
    }
    renderCharacter();
  },
  levelUp: function () {
    this.level += 1;
    renderCharacter();
  },
};

function renderCharacter() {
  document.querySelector("#charName").textContent = character.name;
  document.querySelector("#charClass").textContent = character.class;
  document.querySelector("#charLevel").textContent = character.level;
  document.querySelector("#charHealth").textContent = character.health;

  const img = document.querySelector("#charImage");
  img.setAttribute("src", character.image);
  img.setAttribute("alt", character.name);
}

document.querySelector("#attackBtn").addEventListener("click", function () {
  character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
  character.levelUp();
});
renderCharacter();
