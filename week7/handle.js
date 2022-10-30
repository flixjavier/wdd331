const btn = document.querySelector( 'button' );

const clickHandler = () => {
    document.body.classList.toggle( 'change' );
}

btn.addEventListener( 'click', clickHandler );

const changeHandler = function() {
    // Select unchecked radio buttons. Returns a NodeList.
    const notfave = document.querySelectorAll('input:not(:checked)');
    // Create a new array from the NodeList
    notfave.forEach( function( item ) {
        // Find the parent node, and add a 'fade' class
        item.parentNode.classList.add( 'fade' );
    });
};

const form = document.querySelector( 'form' );
form.addEventListener( 'change', changeHandler );

const trigger = document.querySelector( '#trigger' );
const moveIt = document.querySelector( '.wobble' );

trigger.addEventListener( 'click', function() {
    moveIt.classList.toggle( 'running' );
});