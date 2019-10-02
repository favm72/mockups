function render_partial(view, callback){   
    var request = new XMLHttpRequest();
    request.open('GET', view, true);
    request.send(null);
    request.onreadystatechange = function () {        
        if (request.readyState === 4 && request.status === 200) {            
            callback(request.responseText);            
        }
    }
}

function open_view(page, callback){
    render_partial(page, (text)=>{
        document.querySelector("section.main").innerHTML = text;
        callback();
    });    
}