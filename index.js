const personForm = document.querySelector('form#personForm')
function handelSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const color = f.favoriteColor.value
    let CSScolor = color.replace(/\s/g,'');
    const newParagraph = document.createElement("P");
    const t = document.createTextNode(color + " is " + name + "\'s  favorite color");
    newParagraph.appendChild(t);
    newParagraph.style.backgroundColor = CSScolor
    newParagraph.style.color = 'white'
    if(newParagraph.style.backgroundColor == ''){
        newParagraph.style.color = 'black'
    }
    document.body.appendChild(newParagraph);
}
personForm.addEventListener('submit', handelSubmit)