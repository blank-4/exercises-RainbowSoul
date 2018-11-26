var numb = 0;

for ( numb = 0; numb <= 1000; numb++ ) {
    if ( numb % 7 == 0 ) {
        console.log( "Multiple de 7 : Fizz" );
    } else if ( numb % 5 == 0 ) {
        console.log( "Multiple de 5 : Buzz" );
    }
    else {
        console.log( numb );
    }
}