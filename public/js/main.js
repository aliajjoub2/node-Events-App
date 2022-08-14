function deleteEvent() {
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')
    
    axios.delete('/events/delete/'+ id)
    .then( (res)=> {
        console.log(res.data)
        alert('event was deleted')
        window.location.href = '/events' // redirect to events page
    })

    .catch( (err)=> {

        console.log(err)
    })

}