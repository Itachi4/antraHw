
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.title; 
        if (todo.completed) {
          li.classList.add("checked");
        }
        addCloseButton(li);
        document.getElementById("myUL").appendChild(li);
      });
    });

  function addCloseButton(li) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
    li.appendChild(span);
  }

  var list = document.getElementById('myUL');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  document.querySelector('.addBtn').onclick = function() {
    const inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
      alert("Blank not allowed");
    } else {
      const li = document.createElement("li");
      li.textContent = inputValue;
      addCloseButton(li);
      document.getElementById("myUL").appendChild(li);
      document.getElementById("myInput").value = ""; 
    }
  }
});

