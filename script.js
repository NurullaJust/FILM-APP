fetch("https://api.npoint.io/ef37623e0d4c658666ef")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const containerDiv = document.getElementById("apiDataContainer");
    data.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "dataItem";
      itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h2>${item.title}</h2>
          <p>Rating: ${item.rating}</p>
        `;
      containerDiv.appendChild(itemDiv);
    });
  })
  .catch((error) => console.error("API error:", error));
