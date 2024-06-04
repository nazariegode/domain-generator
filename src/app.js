/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/bg2.png";
import "./assets/img/d.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateDomain();

  function generateDomain() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domain = [".com", ".es", ".cl", ".ar", ".net", ".io"];

    let pronounIndx = Math.floor(Math.random() * pronoun.length);
    let adjIndx = Math.floor(Math.random() * adj.length);
    let nounIndx = Math.floor(Math.random() * noun.length);
    let domainIndx = Math.floor(Math.random() * domain.length);

    return (
      pronoun[pronounIndx] + adj[adjIndx] + noun[nounIndx] + domain[domainIndx]
    );
  }
};
