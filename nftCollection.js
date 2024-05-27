/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, artist, description) {
    let nft = {
        name: name,
        artist: artists,
        description: descriptions
};
nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
      console.log("Name: " + nftCollection[i].name);
      console.log("Artists: " + nftCollection[i].artists);
      console.log("Descriptions: " + nftCollection[i].descriptions);
      console.log("-----------------------------");
    }
  }

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
  }

// call your functions below this line
mintNFT("NFT 1", "priya", "Depicting the cultural heritage of India");
mintNFT("NFT 2", "Rahul", "Portraying the political landscape of India");
mintNFT("NFT 3", "Salman", "Celebrating the art of Indian classical dance");
mintNFT("NFT 4", "Rupa", "Exploring the spiritual aspects of existence");
mintNFT("NFT 5", "Ritu", "Reflecting the diverse experiences of life in India");

listNFTs();

console.log("Total NFTs: " + getTotalSupply());
