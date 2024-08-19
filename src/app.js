/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/bg2.png";
import "./assets/img/d.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateDomains().join(
    "<br>"
  );

  function generateDomains() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domain = [".com", ".es", ".cl", ".ar", ".net", ".io"];

    let domains = [];

    // Elegir un dominio al azar
    let domainIndx = Math.floor(Math.random() * domain.length);
    let selectedDomain = domain[domainIndx];

    // Generar combinaciones solo para el dominio seleccionado
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          let newDomain = p + a + n + selectedDomain;
          domains.push(newDomain);
        }
      }
    }

    return domains;
  }
};
