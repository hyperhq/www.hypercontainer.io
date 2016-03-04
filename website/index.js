import 'font-awesome/css/font-awesome.css'
require('./normalize.css')
require('./index.css')

import uuid from 'uuid'

const validEmail = function(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

window.onSubmit = function() {
    const emailDom = document.getElementById('email')
    const fullnameDom = document.getElementById('full-name')
    const email = emailDom.value.trim()
    const fullname = fullnameDom.value.trim()
    if (!fullname) {
        alert('Invalid Fullname')
        return false
    }
    if (!validEmail(email)) {
        alert('Invalid Emaill Address')
        return false
    }
    let userId = analytics.user().id()
    if (!userId) userId = uuid.v4()
    analytics.identify(userId, {
      name: fullname,
      email
    }, null, () => {
        emailDom.value = ''
        fullnameDom.value = ''
        analytics.track('Requested Private Beta', {}, {}, () => {
          alert('Subscribe Succeed')
        })
    })
}
