
module.exports = function(message){
    if(NODE_ENV=='development'){
        console.log('development')
    }
    console.log(`hello ${message}`);
}