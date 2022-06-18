<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Page Titles</title>
        </head>

        <body>
            <script>

                  
            
                <button>Press Me, Bitch</button>

                const button = document.querySelector('button');

                function greet() {
                    const name = prompt('What is your name?');

                    alert(`Hello ${name}, nice to see you!`);
                }

                button.addEventListener('click', greet);
                

                /* Our JavaScript don' goes' right here! Happy Face */
                
            </script>
        </body>
    </html>