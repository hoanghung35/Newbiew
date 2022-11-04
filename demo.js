var promise = new Promise(function(resolve, reject){
    resolve( () =>{
        setTimeout(() => {
            console.log('No problem!');
        }, 1000);
    });
})