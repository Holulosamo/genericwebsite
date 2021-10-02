export default function formValidation(){
    const d = document,
        form = d.querySelector('.contact-form'),
        inputs = d.querySelectorAll('.text-inputs');

    inputs.forEach(input => {
        const validationText = d.createElement('span');
        validationText.id = input.name;
        validationText.textContent = input.title;
        validationText.classList.add('invalid-text', 'none');
        input.insertAdjacentElement('afterend', validationText);
    });

    d.addEventListener('keyup', e => {
        if(e.target.matches('.contact-form [required]')){
            const formInput = e.target;
            let pattern = e.target.pattern || e.target.dataset.pattern,
              regExp = new RegExp(pattern);

            if(formInput.value !== ""){
                return !regExp.exec(e.target.value)
                  ? d.getElementById(formInput.name).classList.add('error')
                  : d.getElementById(formInput.name).classList.remove('error');
            }
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const sendText = d.querySelector('.sending');

        sendText.classList.remove('none');

        setTimeout(() => {
            sendText.classList.add('none');
            form.reset();
        }, 1500);
    });
}