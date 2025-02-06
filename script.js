import { help, whois, projects, social, secret, banner } from "./commands.js";

const inputField = document.getElementById('input');
const outputContainer = document.getElementById('output');

let isBannerLoaded = false;  

window.onload = function() {
    if (!isBannerLoaded) {  
        typeWriter(banner, function() {
            isBannerLoaded = true;  
        });
    }
};

function typeWriter(text, callback) {
  let i = 0;
  const interval = setInterval(() => {
    outputContainer.innerHTML += `<span class="typed-text">${text[i]}</span>`;
    outputContainer.scrollTop = outputContainer.scrollHeight; 
    i++;

    if (i === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 20); 
}

function processCommand(command) {
  let output = '';

  switch (command.trim().toLowerCase()) {
    case 'whois':
      output = whois.join('\n');
      break;
    case 'help':
      output = help.join('\n');
      break;
    case 'projects':
      output = projects.join('\n');
      break;
    case 'social':
      output = social.join('\n');
      break;
    default:
      output = `Unknown command: ${command}`;
  }

  outputContainer.innerHTML += `<span class="command-text">$ ${command}</span>\n`;  
  typeWriter(output + '\n\n', () => {}); 
}

inputField.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = inputField.value;
    processCommand(command);  
    inputField.value = ''; 
}});

