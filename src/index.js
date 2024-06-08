import _ from "lodash";
import "./styles/styles.css";
import Icon from "./icons/man.png";
import Data from './dataAssets/data.xml';
import Notes from './dataAssets/data.csv';
import toml from './dataAssets/data.toml';
import yaml from './dataAssets/data.yaml';
import json from './dataAssets/data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
