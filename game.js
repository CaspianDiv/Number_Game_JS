
            const h1 = document.querySelector('h1');
            const cdv = document.getElementById('cdv');
            const btn = document.getElementById('btn');
            let second = 10;
            let order = 1; 
            let kod = '';
            let arr = [];
            let stop = true;

            for(i = 1; i <= 16; i++) arr.push(i);

            for(i = 0; i < 4; i++){
                kod += `<tr>`
                for(j = 0; j < 4; j++){
                    let r = rand(0, arr.length -1);
                    kod += `<td onclick="turnOff(this)">${arr[r]}</td>`
                    arr.splice(r , 1);
                }
                kod += `</tr>`
            }
            cdv.innerHTML = kod;

            let timer = setInterval(countDown,1000);

            function countDown(){
                h1.innerHTML = second;
                second--
                if(second <= 0) gameOver(false);
            }

            function gameOver(res) {
                const cells = document.querySelectorAll('td');
                const gameOverContainer = document.getElementById('game-over-container');
                clearInterval(timer);
                if(!res){
                    cells.forEach(cell => {
                        cell.style.background = 'black';
                        cell.style.color = 'black'
                    });
                    gameOverContainer.textContent = 'GAME OVER ! ';
                }else {
                    h1.innerHTML = 'Təbriklər Qazandın !';
                }
            }

            function turnOff(cell){
                if(cell.innerHTML == order){
                    cell.style = 'color: silver;'
                    order++
                    if(order > 16) gameOver(true)
                }else {
                    cell.style = 'color: white;'
                }
            }

            btn.onclick = function(){
                location.reload();
            }


            function rand(min,max){
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
