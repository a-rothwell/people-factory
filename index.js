const personForm = document.querySelector('form#personForm')

function handelSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const color = f.favoriteColor.value
    const newParagraph = onCreateParagraph(name,color)
    document.body.appendChild(newParagraph);
    document.body.appendChild(document.createElement("HR"))
    const details = document.querySelector('#details')
    details.innerHTML = `<em>${name}</em>`
}

function onCreateParagraph(name,color){
    let CSScolor = color.replace(/\s/g, '')
    const newParagraph = document.createElement("P")
    const t = document.createTextNode(color + " is " + name + "\'s  favorite color")
    newParagraph.appendChild(t)
    newParagraph.style.backgroundColor = CSScolor
    newParagraph.style.color = 'white'
    return newParagraph
}
personForm.addEventListener('submit', handelSubmit)