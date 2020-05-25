document.addEventListener("DOMContentLoaded", function (){
    let id = 0;

    let btn = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    btn.appendChild(btnText);
    
    document.body.appendChild(btn);
    
    btn.addEventListener('click', function (){
        id++;
        let div = document.createElement('div');
        div.setAttribute('class', 'aDiv');
        div.setAttribute('id', id);
        
        document.body.appendChild(div);

        div.addEventListener('mouseout', function(){
            div.innerText = ''; 
    
        });
    
        div.addEventListener('click', function() {
            let randomColor = getRandomColor();
            div.style.backgroundColor = randomColor;
        })
    
        div.addEventListener('dblclick', remove);
    
    });
    
    let color = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'white', 'black'];
        
    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random()*color.length)];
        return randomColor;
    }
    
    
    function remove() {
    
        if (this.id %2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert('The next sibling does not exist');
            }
        } else {
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('The next sibling does not exist');
            }
          
        }
    }
    }); 


