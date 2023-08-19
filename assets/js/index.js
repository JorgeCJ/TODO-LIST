let notCompletedList = document.querySelector('.notCompletedList');
let completedList = document.querySelector('.completedList');
let input = document.querySelector('.input');
let button = document.querySelector('button');
document.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    createTask();
    return;
  }
  let id = null;
  if (event.target.classList.contains('incomplete') && event.target.tagName == 'LI') {
    event.target.querySelector('.wrong').remove();
    let list = document.createElement('li');
    list.classList.add('complete');
    list.innerHTML = event.target.innerHTML + '✔️';
    completedList.appendChild(list);
    event.target.remove();
  }
  if (event.target.classList.contains('complete') && event.target.tagName == 'LI') {
    event.target.remove();
  }
})

function createTask() {
  if (input.value != '') {
    let div = document.createElement('div');
    let li = document.createElement('li');
    let span = document.createElement('span');
    li.classList.add('incomplete');
    li.innerHTML = input.value;
    span.innerHTML = '❌';
    span.classList.add('wrong');
    div.append(li, span);
    notCompletedList.appendChild(div);
    li.appendChild(span);
    input.value = '';
  }
}
