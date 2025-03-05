function tech(techValue) {
  var holder = "";
  var techString = techValue.toLowerCase();

  let string = techValue.split(" ");
  const template = string.forEach((element) => {
    if (techString === "nodejs") {
      holder += `<i class="fa-brands fa-node-js fa-xl"></i>`;
    }
    if (techString === "react") {
      holder += `<i class="fa-brands fa-react fa-xl"></i>`;
    }
    if (techString === "next") {
      holder += `<i class="fa-solid fa-forward fa-xl"></i>`;
    }
    if (techString === "typescript") {
      holder += `<i class="fa-solid fa-cannabis fa-xl"></i>`;
    }
  });
  return holder;
}

module.exports = { tech };
