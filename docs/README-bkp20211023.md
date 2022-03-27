# MUSICSHARES: a decentraliced autonomous organization to create, collab, commission, buy and sell NFT music
> A paradigm shift experiment in music:<br>
> what if music where not bought but supported?,<br>
> what if music werent private but public?,<br>
>What if we treat all musics as common wealth?.

# Why musicShares?
Music as NFt is yet an undexplored area.
This project, MusicShares,  aims to promote the creation and developtment of musical projects, collaboration between artists, and commissionement of new works, through an NFT/SFT buying and selling mechanism under a paradigm of colaboration.

# How it works?
- Musical projects are minted as NFTs with the funding of Commisioner/s. 
- After minted, SFTs based on the original NFT are minted and sold. Each SFT bought, retroactivel fund the musical project trhough a mechanism that benefits all parties.

# What you can do with this?
- you can mint the music you create.
- You can fingerprint and timestamp your music, and put set this record on the blockhain.
- You can make a call for commissioner/s for your musical project or call as a commissioner of a new musical project
- You can do Onchain and offchain commissioning.
<!-- - Delegated minting (minting fee is paid by commissioner) -->
<!-- - Offchain commisioning (minting is paid in person to the commisioned) -->
<!-- , by declaring a value anf publishing your music as an NFT -->
<!-- - You can claim an existing music good -->



# CREATORS
## what creators can do?
- mint and register your musical project into a DAO
- pause or mint your music NFT
- upgrade your music (upgradable contracts)

## How can I enter as a Creator?
- A DAO mechanism is provided.

# COMMISSIONERS
## What can commissioners do with this?
- they can make requests.
- aprove or dispute the result of their commission request



# MUSICSHARER
## What Can Listeners do with this?
- Retroactively fund the music they love

# MusicShares Manifest:
- **Music is a public good** 
- **Music is created with the support of world wide comunities and individuals**
- **Decentraliced commissioning of music supported by the free willpower of comunities and individuals around the world, validates implicitly a mechanism to earn income.**
- **Music belongs to creators and also to its community**
- **Knoledge is free, and music is knowledge**


# Features
- Fractional NFts
- NFTs royalties.
- Offchain commissioning
- EIP-3668 for offchain signing
- (EIP-2981: NFT Royalty Standard)<https://eips.ethereum.org/EIPS/eip-2981>




# Long Explanation
Musicshares is a Decentraliced Application governed through a DAO mechanism where three parties, creator-commissioner-supporters, interact in a free and decentraliced market.
The DAO provides several tools to fund and promote the creation and commissioning of new music, facilitate the auto-managment of music administration, from rights managment and copy protection to automatic royalties payed directly to each artist, and the infraestructure to encorage the distribution and selling of digital and physical goods associated to each musical project.


# Under the hood
Each Creator is associated to a private key. When a request to send a transaction is received, the an external Relayer validates the request, atomically assigns it a nonce, reserves balance for paying for its gas fees, resolves its speed to a gas price, signs it with its private key, and enqueues it for submission to the blockchain. The response is sent back to the client only after this process has finished. 
Then, the transaction is broadcasted through both Infura and Alchemy for redundancy and **retried up to three times** in case both APIs are down.

- Every minute, all in-flight transactions are checked by the system. 

If they have not been mined and more than a certain time has passed (which depends on the transaction speed), they are resubmitted with a 10% increase in their gas price (or the latest gas price for their speed, if it’s greater), which could be up to a 150% of the reported gas price for their speed. This process causes the transaction hash to change, but their ID is preserved. On the other hand, if the transaction has been mined, it is still monitored for several blocks until we consider it to be confirmed.



# How it's made 
- There are three types of users: Creators, Commissioners and Supporters.
- Creators are allowed to mint NFTs as a single or longplay musical distribution. 
- Creators can also invite other artists to collab with them. Earnings from the sale and rent of each NFT (called Royalties) are payed directly to each artist and collaboration artists as stated in the smart contract.
- Commissioners are any user that commands or buys a new work as in the form of an NFT (ERC721). This also allows him to participate in future earnings of the royalties of each commissioned work.
- General users are people that rent music and scores to personal use, which is made by the buying of NFT-SFT(ERC 1155) derived from each NFT-ERC721 commmissioned work.
- Each  musical project (album, single or music scores), once minted, becomes public.

This resilent and decentralided mechanism provides, through its CID, a proof that can be used in case of an eventual copyright dispute.

This way MusicShares provides several mechanisms to fund music as public goods at different stages of the creation process, before the work is published, through the **commissioner** mechanism, and after it was published, through the **supporter** mechanism in which users who buy the SFTs deribed from the original NFT becomes direct beneficiaries of the public good.


 <!-- are encrypted whith minter's keys, uploaded to IPFS,  -->
<!-- creators premine for themselves 51% of governance needed to burn or pause the original NFT. -->

# Links 
- (NFT)<https://ethereum.org/en/nft/>

<!-- - Musishares facilitates the the auto managment if sevelar aspects of music administration, from rights managment and copy protection , to distribution , selling, commisioning. -->



# Definitions
There are three roles in music shares, **Creators, Commisioners and Supporters.**, each one has the next impliyed mechanisms:

*Creator/s* are artists who create music and/or collab in others artists music related project.
Each creator has granted permission to mint his project, a SINGLE or LONGPLAY musical distribution, as an NFT.

*Commisioner/s*:is the counterparty that participates in shares (commisioners) of the music (single, album) trhough at the funding round of the project.

*Supporter/s* are people who benefits of music as a public good and retroactively funds this public good. 

A *public good* is something that benefites a large and unselected group of people, in this case the music or musical project. 

A *DAO* is a decentraliced autonomous organization. 

*Community* is a group of people having common interests.

*CID* Content ID generated through IPFS

*Original NFT*, the NFT that serves as the longest chain record to associated CIDs



<!-- *DAO* is the decentraliced autonomous organization that disposes the mechanisms in place (smart contracts, arbitrage,etc). -->
<!-- *Comunity* is the group of decentraliced autonomous individuals.  -->
<!-- Coming up for ways for people who create public goods to that actually get any of the value they capture is a stagnary hard problem. -->





# Case study I: Delegated minting
Peter and Bob are both creators.
Peter has made a work and wants to commissions Bob to create a collaborative work after this.
Peter create a fund to finance this process and  pays for the minting of the work.
In this case , both Peter and Bob, create the work's draft, but instead of Peter minting the NFT for which he is being commisioned, Peter delegates the minting to Bob by signing a message.
Now Bob, the commissioner, pays for the minting.

<!-- Here Peter participates in 50% of the shares of the creator, but would also participate in the 50%  -->
 <!-- of a collaborative work. -->
<!-- Bob will create a fund to support the creation of the NFT and Peter will get commissioned by Bob to create the collaborative work. -->

# Case study II: Onchain Commissioning
1. Bob publishes a COMMISSIONING CALL on musicShares DAP.
2. Alice responds to Bob's call and makes a transaction to support bob's project.
3. Bob publish the work as NFT.
3. Bob and Alice shares the benefits of future sales of derived SFTs.


# Case study III: Offchain Commissioning
Alice and bob lives in two different cities far from each other.
Alce commissions Bob to make a musical work.
Bob travels to meet Alice in person, and they make a transaction to seal a mutual agreement.
This trasaction was made offline and offchain, it happened in person. 
This situation describes what we refer as an **offchain commissioning**.
To validate this operation, Alice must sing a message she receibed from Bob in which the work is declared, the commissionmer (Alice) is informed under consent, and the work is put on custody into a public virtual trust through the NFT mechanism.

<!-- Alice comisiona a Bob para realizar una obra. -->
<!-- en dos ciudades distintas. -->
<!-- Bob viaja a la ciudad de Alice y realizan una transaccion para registrar el acuerdo entre ambas partes. -->
 <!-- this is declared and agreed. -->
 <!-- this signing message you declare the act of commissionment of the work on custody through this NFT. -->



<!-- There are two types of NFTs: erc721 and erc1155.
**ERC721** are used to commission new music. -->





# How it works
Each commissioner/s are  share holder of the ERC721 contract that represents the musical project.
- Buyers of NFTs pay for the royalties and become share holders, that means, they become royalties beneficiaries aswell.




 or erc1155 token. This property is shared with the creator/s party, and allows benefits such as earnings participation and access to special contents and/or specific agreements within the creator/s part.

Each share owners has a participation, among the creator and the collab artists, in the returnings of each copy sold in musicShares decentraliced platform.

- for creator/s: Creators are the author/s of the NFT content.



- for commissioner/s: When a commissioner buys an NFT erc721, an specified amount of SFT(erc1155) are emited, replicating the original NFT, which revenue is shared with the creator/s.

- for listener/s: As all music managed by this DAO is already public, each time a listener pays for a distribution, the ownership of the SFT (erc1155) represents a share in the project.


- commissioners are the NFT owners. They are like share holders.
- each time the SFT is sold the value of the NFT is higher, and creator/s and collab artists get paid.
- Alternative markets may arise as people buying and selling replicated copies(SFT) of the original NFT in diferents flavors.
- Music is automatically protected by IPFS


# quicks comments
- **delegated minting**. Useful for funding, autions and commissioning where minting price is payed by the owner/s of the NFT.
- **Offchain commissioning**, musicShares provides a mechanism to register and validate the music you get commissioned by your offchain activity. You can still interact with the outside world, on your local comunity for example, and still receibe the commisioning price for minting your music and register this transaction in the blockchain.
- We use NFT as a public mechanism to recognise the value and role of the commissioner in the creation of new musics.
- (EIP-2981: NFT Royalty Standard)<https://eips.ethereum.org/EIPS/eip-2981>




<!-- # Conclusions -->



<!-- This is a permisionless decentraliced platform for the creation and co-creation of NFT music.

We do act whith permission under our marketplace. But you could use this DAC anyways as you see fits in your case. -->


<!-- # Minting an NFT 721
1. Create a draft for your single, album or score
2. Now you can choose to mint it for yourseld, that means your are the commisioner. This may imply an offline commioned work, or your own initiative.

# erc 1155
The ERC-1155 token standard provides a way to make one smart contract govern almost an unlimited number of tokens — technically, 2²⁵⁶ token types with up to 2²⁵⁶ copies of each. Additionally, each token is semi-fungible. Unlike ERC-721 non-fungible tokens (NFTs), which can only be owned by one address each, semi-fungible means:
Each token type can be owned by multiple addresses
One address can own multiple copies of each token
This expands the design space for building game economies and provides efficiency benefits as well. ERC-1155 is a result of the combined efforts of multiple companies working together to achieve these two goals, including Enjin, Horizon Games, and The Sandbox. -->


<!-- 

# onchain governance



# Minting SFT 1155 (semi fungible token)

# Sell in marketplace

# Private IPFS 
<https://medium.com/@s_van_laar/deploy-a-private-ipfs-network-on-ubuntu-in-5-steps-5aad95f7261b>

### Install docsify with yarn in linux
```
yarn global add docsify-cli
```

## Adding the install location to your PATH
```
export PATH="$(yarn global bin):$PATH"
```

# how to run this in local?
```
export PATH="$(yarn global bin):$PATH"

docsify serve

brave-browser http://localhost:3000

``` -->

# FAQs
# FUNCIONAMIENTO 
0. un proyecto musical se mintea como NFT. Los creadores establecen las condiciones y la distribucion porcentual de sus beneficios, y la obra deviene publica.
1. cada uno que compra el SFT le pone su precio.
2. cada aporte suma al valor total.
3. cada uno de los SUPORTERs tiene un beneficio proporcional valor de su aporte.


# music as NFT model

# musicShares DAO example

- Cada punto de entrada a musicShares es una biblioteca
- musichares.co es un punto de entrada
- musicshares.eth es otro punto de entrada posible
- mshares.crypto seria otro
- musicshares.dao otro x ej


# que es el DAO?
The Dao is the  DECENTRALIZAED AUTONOMOUS ORGANIZATION that runs the ongoing governance of SFTs adquired properties.

Generally, all NFTS are accessible and available as a puclic good in the 

# is stealing posible?
I short, no. The comunity validates implicitly which are the valid works through support.

# can somebody steal your art?


# How do I start?
To start press the plus button at the top of your panel and start creating!



# licence musicshares (Draft)
- you dont have an exclusive contract with musicshares
- the music you mint through this DAP will be uploaded to public a decentraliced IPFS network.
- Contents are owned by the creators and their comunities.

