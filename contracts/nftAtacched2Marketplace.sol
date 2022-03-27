//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Characteristics:
//- this erc721 token contract is attached to a marketplace (marketplace contract should be created in advance)
// this is my prefered market contract

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTAttached2Marketplace is ERC721URIStorage {

    //auto-increment field for each token
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    //address of the NFT market place
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("OPPT NFTs", "OPPT"){
       contractAddress = marketplaceAddress;
    }

    /// @notice create a new token
    /// @param tokenURI : token URI
    function createToken(string memory tokenURI) public returns(uint) {
        //set a new token id for the token to be minted
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId); //mint the token
        _setTokenURI(newItemId, tokenURI); //generate the URI
        setApprovalForAll(contractAddress, true); //grant transaction permission to marketplace

        //return token ID
        return newItemId;

    }
}