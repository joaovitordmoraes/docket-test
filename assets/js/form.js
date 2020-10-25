(function() {
    const submit = document.querySelector('.apply-form .submit');
    const descriptionText = document.querySelector('.heading .description');
    const name = document.querySelector('.apply-form .name');
    const email = document.querySelector('.apply-form .email');
    const tel1 = document.querySelector('.apply-form .tel1');
    const tel2 = document.querySelector('.apply-form .tel2');

    submit.addEventListener('click', function(event) {
        event.preventDefault();

        if (!name.checkValidity()) {
            // name.after(`<span class="error">${name.validationMessage}</span>`)
            name.nextElementSibling.innerHTML = 'Digite um nome válido'
            // document.querySelector(".error").innerHTML = name.validationMessage;
        }

        if (name.checkValidity()) {
            descriptionText.classList.add('-hidden');
            sendData();
        }
    });


    
    

    function sendData() {
        const content = document.querySelector('.heading')
            ,createInfo = document.createElement('div')

        createInfo.classList.add('info-content')
        createInfo.innerHTML = `
        <div class="field">
            <p class="name">Nome completo:</p>
            <p class="content">${name.value}</p>
        </div>

        <div class="field">
            <p class="name">E-mail:</p>
            <p class="content">${email.value}</p>
        </div>

        <div class="field">
            <p class="name">Telefone 1:</p>
            <p class="content">${tel1.value}</p>
        </div>

        <div class="field">
            <p class="name">Telefone 2:</p>
            <p class="content -empty">${tel2.value}</p>
        </div>
        `
        
        content.insertAdjacentElement('beforeend', createInfo)
    }
})();