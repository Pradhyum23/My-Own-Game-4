ClassGame(){
    consutructor(){


    }

    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState=data.value();
        })

    }

    update(state){
        database.ref('/').update({
            gameState: State
        });
      }
        asyncstart(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }
        
            Animal1 = createSprite(100,200);
            Aniaml1.addAnimation("Animal1",Aniaml1_img);
            Aniaml2 = createSprite(300,200);
            Aniaml2.addAnimation("Aniaml2",Aniaml2_img);
            Aniaml3 = createSprite(500,200);
            Aniaml3.addAnimation("Aniaml3",Aniaml3_img);
            Aniaml4 = createSprite(700,200);
            Aniaml4.addAnimation("Aniaml4",Aniaml4_img);
            Aniamls = [Aniaml1, Aniaml2, Aniaml3, Aniaml4];
          }
        
          play(){
            form.hide();
            
            Player.getPlayerInfo();
            player.getAnimalsAtEnd();
            
            if(allPlayers !== undefined){
              background(rgb(198,135,103));
              image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
              
              //var display_position = 100;
              
              //index of the array
              var index = 0;
        
              //x and y position of the Aniaml
              var x = 175 ;
              var y;
        
              for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
        
                //position the Aniaml a little away from each other in x direction
                x = x + 200;
                //use data form the database to display the Aniaml in y direction
                y = displayHeight - allAniaml[plr].distance;
                Aniamls[index-1].x = x;
                Aniamls[index-1].y = y;
               // console.log(index, player.index)
        
               
                if (index === player.index){
                  stroke(10);
                  fill("red");
                  ellipse(x,y,60,60);
                  Aniamls[index - 1].shapeColor = "red";
                  camera.position.x = displayWidth/2;
                  camera.position.y = Aniaml[index-1].y;
                }
               
                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
              }
        
            }
        
            if(keyIsDown(UP_ARROW) && player.index !== null){
              player.distance +=10
              player.update();
            }
        
            if(player.distance > 3860){
              gameState = 2;
              player.rank +=1
              Player.updateAniamlsAtEnd(player.rank)
            }
           
            drawSprites();
          }
        
          end(){
            console.log("Game Ended");
            console.log(player.rank);
          }
        }




