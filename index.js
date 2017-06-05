const personForm = document.querySelector('form#personForm')

function handelSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    console.log(f.personName.value)
}

personForm.addEventListener('submit', handelSubmit)