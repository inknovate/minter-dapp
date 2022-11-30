
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzqMLV0wmfQKqqZhiQtcbtuPa9pZGuAwg9Pd-wuqfCbRf8FFjktV4Wg_r9Vgw6mmKcL/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Congratulations Your Address has been Whitelisted!"
      })
      .catch(error => console.error('Error!', error.message))
  })
