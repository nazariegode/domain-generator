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

    // Elegir un dominio al azar para todos los nombres
    let domainIndx = Math.floor(Math.random() * domain.length);
    let selectedDomain = domain[domainIndx];

    let domains = [];

    for (let i = 0; i < 10; i++) {
      let pronounIndx = Math.floor(Math.random() * pronoun.length);
      let adjIndx = Math.floor(Math.random() * adj.length);
      let nounIndx = Math.floor(Math.random() * noun.length);

      let newDomain =
        pronoun[pronounIndx] + adj[adjIndx] + noun[nounIndx] + selectedDomain;
      domains.push(newDomain);
    }

    return domains;
  }
};
