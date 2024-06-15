// Cria o card
const card = document.createElement("div");
card.className = "_card";
card.style.marginTop = "1rem";

// Cria o header do card
const cardHeader = document.createElement("div");
cardHeader.className = "_card-header";

// Adiciona o título ao header
const headerDiv = document.createElement("div");
const titleSpan = document.createElement("span");
titleSpan.title = "Valuation Benjamin Graham";
titleSpan.textContent = "Valuation Graham";
headerDiv.appendChild(titleSpan);
cardHeader.appendChild(headerDiv);

// Cria o corpo do card
const cardBody = document.createElement("div");
cardBody.className = "_card-body";

// Adiciona o valor ao corpo
const bodyDiv = document.createElement("div");
const valueSpan = document.createElement("span");

let tableIndicators = document.getElementById("table-indicators");

//encontra o card do lpa
const lpa_card = Array.from(tableIndicators.childNodes)
  .filter((indicator) => typeof indicator.data !== "string")
  .find((indicator) => indicator.childNodes[1].innerText === "LPA");

const lpa_span = lpa_card.childNodes[3];

//encontra o card do vpa
const vpa_card = Array.from(tableIndicators.childNodes)
  .filter((indicator) => typeof indicator.data !== "string")
  .find((indicator) => indicator.childNodes[1].innerText === "VPA");

const vpa_span = vpa_card.childNodes[3];

// pega os valores dos cards
const LPA = Number(lpa_span.innerText.replace(/\./g, "").replace(/\,/g, "."));

const VPA = Number(vpa_span.innerText.replace(/\./g, "").replace(/\,/g, "."));

console.log({
  LPA,
  VPA,
});

const grahamConst = 22.5;

//realiza o cálculo
const result = Math.sqrt(grahamConst * LPA * VPA);

//formata o resultado
const formattedResult = result.toFixed(2).replace(".", ",");

valueSpan.textContent = "R$ " + formattedResult;
bodyDiv.appendChild(valueSpan);
cardBody.appendChild(bodyDiv);

// Adiciona o header e o corpo ao card
card.appendChild(cardHeader);
card.appendChild(cardBody);

// Seleciona o contêiner dos cards
const container = document.querySelector("#cards-ticker");

// Se o contêiner existir, insere o novo card
if (container) {
  container.appendChild(card);
}
