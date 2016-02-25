import 'font-awesome/css/font-awesome.css'
require('./normalize.css')
require('./index.css')

import uuid from 'uuid'

const validEmail = function(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit')
    submit.addEventListener('click', function(event) {
        const email = document.getElementById('email').value.trim()
        if (validEmail(email)) {
            const userId = analytics.user().anonymousId() || uuid.v4()
            analytics.identify(userId, { email }, null, (err, ret) => {
                alert('Subscribe Succeed')
            })
        } else {
            alert('Invalid Emaill Address')
        }
        event.preventDefault()
        event.stopPropagation()
    })
})
