var container = document.getElementById('sort');

var prompt = document.createElement('h2')
var instruction = document.createTextNode('Select a Sort To Continue');
prompt.appendChild(instruction);
prompt.id = 'prompt';

container.appendChild(prompt);
