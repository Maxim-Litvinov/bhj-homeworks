    const fontControls = document.querySelectorAll('.font-size')
    
    const textColorControls = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke')
    const bgColorControls = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white')

    const bookElement = document.getElementById('book')

    fontControls.forEach(control => {
        control.addEventListener('click', function(event) {
            event.preventDefault()
  
            fontControls.forEach(c => c.classList.remove('font-size_active'))
    
            this.classList.add('font-size_active')

            const size = this.getAttribute('data-size')
            if (size === 'small') {
                bookElement.classList.remove('book_fs-big')
                bookElement.classList.add('book_fs-small')
            } else if (size === 'big') {
                bookElement.classList.remove('book_fs-small')
                bookElement.classList.add('book_fs-big')
            } else {
                bookElement.classList.remove('book_fs-big', 'book_fs-small')
            }
        })
    })
    
    textColorControls.forEach(control => {
        control.addEventListener('click', function(event) {
            event.preventDefault()

            textColorControls.forEach(c => c.classList.remove('color_active'))
            
            this.classList.add('color_active')
            
            const textColor = this.getAttribute('data-text-color')
            bookElement.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black')
            bookElement.classList.add(`book_color-${textColor}`)
        })
    })

    bgColorControls.forEach(control => {
        control.addEventListener('click', function(event) {
            event.preventDefault();
    
            bgColorControls.forEach(c => c.classList.remove('color_active'))
         
            this.classList.add('color_active')

            const bgColor = this.getAttribute('data-bg-color')
            bookElement.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white')
            bookElement.classList.add(`book_bg-${bgColor}`)
        })
    })