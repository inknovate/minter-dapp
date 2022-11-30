
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzqMLV0wmfQKqqZhiQtcbtuPa9pZGuAwg9Pd-wuqfCbRf8FFjktV4Wg_r9Vgw6mmKcL/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
