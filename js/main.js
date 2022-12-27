document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("whats your Name?");
  if (yourName == null || yourName == "") {
    //Set Name To Unknown
    document.querySelector(".name span").innerHTML = "unknown";
    //Name Is Not Empty
  } else {
    //Set Name To Your Name
    console.log(yourName);
    document.querySelector(".name span").innerHTML = yourName;
  }
  
  //Remove Splash Screan
  document.querySelector(".control-buttons").remove();
};
let duration = 1000;

let blockContainer = document.querySelector('.memory-game-blocks');
let blocks = Array.from(blockContainer.children); //to convert div's components to array  == to get length

//let orderRange=[...Array(blocks.length).keys()];/*عشان نحولها لarray */
let orderRange = Array.from(Array(blocks.length).keys());
console.log(orderRange[0]);
console.log(orderRange[1]);
console.log(orderRange[2]);
let testOrdrRange = [
  1, 11, 13, 12, 18, 17, 19, 0, 2, 16, 5, 7, 9, 3, 10, 4, 6, 8, 14, 15,
];
console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  //Add Click Event
  block.addEventListener("click", function () {
    // Trigger the flip Block Function 
    filpBlock(block);
  });
});
//Flip Block Function
function filpBlock(selectedBlock) {
  //Add Class is-flipped
  selectedBlock.classList.add('is-flipped');
  //collect all filped card
  let allFlipedBlocks=blocks.filter(filpBlock=> filpBlock.classList.contains('is-filpped'));
 // document.querySelector(".memory-game-blocks.face").style. = visible;

//if theres two selected blocks 
if(allFlipedBlocks.length===2){
  //  console.log('two selected');
  //stop clicked function
  stopClicking();
 //check matched Blocks
 checkMatchedBlocks(allFlipedBlocks[0].allFlipedBlocks[1]);
}

}

/*shuffle function */
function shuffle(array) {
  //settings vars
  let current = array.length,
    temp,
    Random;
  while (current > 0) {
    //get random number
    Random = Math.floor(Math.random() * current);
    //Decrease length by one
    current--;
    //[1] Save current Element in Stash
    temp = array[current];
    //[2] current  Element =Random Element
    array[current] = array[Random];
    //[3] Random Element = get Element in Stash

    array[Random] = temp;
}
return array;
}
function stopClicking(){
    blockContainer.classList.add('no-clicking');
    setTimeout(()=>{
        //remove no clicking after duration
        blockContainer.classList.remove('no-clicking');

    },duration);

}
function checkMatchedBlocks(firstBlock,secondBlock){
    let triesElement=document.querySelector('.tries span');
    if(firstBlock.dataset.technology===secondBlock.dataset.technology){
        firstBlock.classList.remove('is-flipped');
        firstBlock.classList.remove('is-flipped');


        firstBlock.classList.add('has-match');
        firstBlock.classList.add('has-match');
    }
    else{
        triesElement.innerHTML=parseInt(triesElement.innerHTML)+1;
        setTimeout(()=>{
            //remove no clicking after duration
            blockContainer.classList.remove('no-clicking');
    
        },duration);
        firstBlock.classList.remove('is-flipped');
        firstBlock.classList.remove('is-flipped');
    }
}