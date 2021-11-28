
        /* Lagre elementet i el */
        let el = document.getElementById("tilt");
        
        /* Få høyden og bredden på elementet */
        const height = el.clientHeight
        const width = el.clientWidth
        
        /*
          * Legg til en lytter for mousemove event
          * Som vil utløse funksjonen 'handleMove'
          * På mousemove: du ser det når du beveger bildet, så kan du sen bøyning 
          du gir den mukighet for et element 
          */
        el.addEventListener('mousemove', handleMove)
        
        /* Definere funksjon a 
        konstant = Konstant er en størrelse som ikke forandrer verdi, i motsetning til en variabel.
        
        */
        function handleMove(e) {
          /*
            *Få plassering av musemarkøren
            * Med hensyn til elementet
            * Ved musemarkering

            */
  
          /* Store the x position x */
          const xVal = e.layerX
          /* Store the y position y */
          const yVal = e.layerY
          
          /*
            * Beregn rotasjonsverdie langs Y-aksen
            * Her er multiplikatoren 20
            * Kontroller rotasjonen
            * Du kan endre verdien og se resultatene, jeg har endra dem ca 100 ganger lol 
            * det er som en ligning 
            */
          const yRotation = 18* ((xVal - width / 2) / width)
          
          const xRotation = -18 * ((yVal - height / 2) / height)
          
          /* Generate string for CSS transform property */
          const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
          
          /* Bruk den beregnede transformasjonen
          dette gjør at den blir til en string
           */  
          el.style.transform = string
        }
        
        /* Legg til lytter for mouseout-hendelse, fjern rotasjonen */
        el.addEventListener('mouseout', function() {
          el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        })
        
        /* Legg til lytter for mousedown-hendelse, for å simulere klikk */
        el.addEventListener('mousedown', function() {
          el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
        })
        
        /* Legg til lytter for musemåling, simuler utgivelsen av museklikk. jeg tror dette er en bra forklaring. */
        el.addEventListener('mouseup', function() {
          el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
        })