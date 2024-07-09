// text to insert into paragraph tag
const content = "<img src'' onerror='alert(`boooom`)'>";


// is bad  
p.innerHTML = content


// is good
// img sanitization
var textNode = document.createTextNode(content);
p.appendChild(textNode);


// for sql
// ORM do this for us
// with the use of prepared statemetns