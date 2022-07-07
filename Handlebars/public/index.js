const socket = io();

socket.on('Productos', (responseBack) => {
    responseBack.map((responsedata)=>{
        const showviews = document.createElement('div')
        Object.keys(responsedata).map((nameTitles=>{
            showviews.innerHTML += `${nameTitles}: ${responsedata[nameTitles]}` + '<br/>'
            document.getElementById("productos").appendChild(showviews)
        }))
        
    })
})
socket.on('Mensajes', (responseBack) => {
    responseBack.map((responsedata)=>{
        const showviews = document.createElement('div')
        Object.keys(responsedata).map((nameTitles=>{
            showviews.innerHTML += `${nameTitles}: ${responsedata[nameTitles]}` + '<br/>'
            document.getElementById("mensajes").appendChild(showviews)
        }))
        
    })
})