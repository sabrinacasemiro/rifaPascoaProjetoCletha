fetch("http://localhost:3333/list").then((response) =>{
    return response.json()
}).then((data) => {

    data.forEach((card, i) => {
        const name = card[0]
        const buyer = card[1]

        const $containerNames = document.querySelector('.container-names')

        const _nameBox = document.createElement('li')
        _nameBox.classList.add('name-box')

        const _name = document.createElement('span')
        _name.classList.add('name')
        _name.setAttribute('for', 'name' + i)
        _name.textContent = name

        const _buttonBuy = document.createElement('button')
        _buttonBuy.classList.add('button-buy')
        _buttonBuy.textContent = 'Comprar Nome'

        const _buyer = document.createElement('input')
        _buyer.classList.add('buyer')
        _buyer.setAttribute('type', 'text')
        _buyer.setAttribute('id', 'name' + i)

        const _buyerName = document.createElement('span')
        _buyerName.classList.add('buyer')

        $containerNames.appendChild(_nameBox)
        _nameBox.appendChild(_name)
        if(buyer){
        _nameBox.appendChild(_buyerName)
        _buyerName.textContent = buyer
        } else{
            _nameBox.appendChild(_buttonBuy)
        }

        _buttonBuy.addEventListener('click', () => {
            const $body = document.querySelector('body')

            const _containerModal = document.createElement('div')
            _containerModal.classList.add('container-modal')
            _containerModal.classList.add('hidden')

            const _modalBuyName = document.createElement('form')
            _modalBuyName.classList.add('hidden')
            _modalBuyName.classList.add('modal-buy-name')

            const _modalTitle = document.createElement('h2')
            _modalTitle.classList.add('modal-title')
            _modalTitle.textContent = name

            const _containerInputButton = document.createElement('div')
            _containerInputButton.classList.add('container-input-button')

            const _inputNameBuyer = document.createElement('input')
            _inputNameBuyer.classList.add('name-buyer-modal')
            _inputNameBuyer.getAttribute('type', 'text')

            const _buttonBuyModal = document.createElement('button')
            _buttonBuyModal.classList.add('button-buy-modal')
            _buttonBuy.textContent = 'Comprar'

            const _containerPix = document.createElement('div')
            _containerPix.classList.add('container-pix')

            const _numberPix = document.createElement('span')
            _numberPix.classList.add('number-pix')
            _numberPix.textContent = '38918187858'

            const _namePix = document.createElement('span')
            _namePix.classList.add('name-pix')
            _namePix.textContent = 'Sabrina Casemiro'

            $body.appendChild(_containerModal)
            _containerModal.appendChild(_modalBuyName)
            _modalBuyName.appendChild(_modalTitle)
            _modalBuyName.appendChild(_containerInputButton)
            _containerInputButton.appendChild(_inputNameBuyer)
            _containerInputButton.appendChild(_buttonBuyModal)
            _modalBuyName.appendChild(_containerPix)
            _containerPix.appendChild(_numberPix)
            _containerPix.appendChild(_namePix)

            _inputNameBuyer.focus()


        })
    });
})