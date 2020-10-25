(function() {
    const submit = document.querySelector('.apply-form .submit');
    const descriptionText = document.querySelector('.heading .description');
    const name = document.querySelector('.apply-form .name');
    const email = document.querySelector('.apply-form .email');
    const tel1 = document.querySelector('.apply-form .tel1');
    const tel2 = document.querySelector('.apply-form .tel2');
    const success = document.querySelector('.success');
    const inputs = document.querySelectorAll('input');
    const applyContent = document.querySelector('.apply-content');
    
    submit.addEventListener('click', function(event) {
        event.preventDefault();

        validate();

        if (name.checkValidity() && email.checkValidity() && tel1.checkValidity() && tel2IsValid) {
            success.classList.add('-active');
            submit.setAttribute('disabled', true);

            setTimeout(() => {
                success.classList.remove('-active');
                success.classList.add('-inactive');

                inputs.forEach(input => {
                    input.value = '';
                });

                submit.removeAttribute('disabled');
            }, 2000);

            descriptionText.classList.add('-hidden');

            if(!applyContent.classList.contains('-active')) {
                sendData();
            } else {
                const infoContent = document.querySelector('.info-content');
                
                success.classList.remove('-inactive');
                applyContent.classList.remove('-active');
                infoContent.remove();

                sendData();
            }

        }
    });
    
    function sendData() {
        const content = document.querySelector('.apply-content')
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
            <p class="content ${tel2.value > '' ? tel2.value : '-empty'}">${tel2.value > '' ? tel2.value : 'Não informado'}</p>
        </div>
        `

        applyContent.classList.add('-active');
        
        content.insertAdjacentElement('beforeend', createInfo)
    }

    function validate() {
        if (!name.checkValidity()) {
            name.nextElementSibling.innerHTML = 'Digite um nome válido'
        } else {
            name.nextElementSibling.innerHTML = ''
        }

        if (!email.checkValidity()) {
            email.nextElementSibling.innerHTML = 'Digite um e-mail válido'
        } else {
            email.nextElementSibling.innerHTML = ''
        }

        if (!tel1.checkValidity()) {
            tel1.nextElementSibling.innerHTML = 'Digite um telefone válido'
        } else {
            tel1.nextElementSibling.innerHTML = ''
        }

        if (tel2.value.length < 14 && tel2.value != '') {
            tel2.nextElementSibling.innerHTML = 'Digite um telefone válido'
        } else {
            tel2.nextElementSibling.innerHTML = ''
        }

        return tel2IsValid = tel2.value.length >= 14 && tel2.value != '' || tel2.value.length < 14 && tel2.value == '';
    }

    function inputHandler(masks, max, event) {
        var c = event.target;
        var v = c.value.replace(/\D/g, '');
        var m = c.value.length > max ? 1 : 0;
        VMasker(c).unMask();
        VMasker(c).maskPattern(masks[m]);
        c.value = VMasker.toPattern(v, masks[m]);
    }
    
    var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
    var tel = document.querySelectorAll('.phone');
    VMasker(tel).maskPattern(telMask[0]);
    tel.forEach(phone => {
        phone.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
    });
})();