import "bootstrap";
import "./style.css";
window.onload = function(){

let pronounList = ["my", "your", "the", "our"];
let adjList = ["amazing", "crazy", "funny", "cool"];
let nounList = ["developer", "pizza", "unicorn", "geek"];
let extList = [".com", ".net", ".us", ".int", ".dev"];

const domainsArea = document.querySelector("#domains");


for (let p of pronounList) {
  for (let a of adjList) {
    for (let n of nounList) {
      for (let ext of extList) {
        const domain = document.createElement("p")
        domain.textContent = p + a + n + ext
        console.log(p + a + n + ext);
        domainsArea.appendChild(domain)
      }
    }
  }
}

return;
}