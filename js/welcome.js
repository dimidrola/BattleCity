
module.exports = function(message){
    if(NODE_ENV=='development'){
        console.log('developmen')
    }
    console.log(`hello ${message}`);
}