---
title: Blackbytes
media_order: 'private-textcoin-file.png,hidden-payments-in-explorer.png'
---

# Blackbytes

Blackbytes is a privacy currency on Obyte.

Information about the recipient and the amount of payment in Blackbytes is not visible on the public ledger, which offers a better level of privacy compared with transactions in Bytes, other public assets on Obyte, and most other cryptocurrencies.

![](hidden-payments-in-explorer.png)

[we need a better image]

## How It Works
This is achieved as only the hashes of the transactions, as well as the hashes of their inputs, are published on the network. The rest of the information is sent via a private message. The recipient’s wallet can verify that the funds are sourced correctly and that the claimed amount transferred is correct by simply checking if the hashes match.

In order to prove to the recipient that the funds being spent originated as a result of a valid transaction, the sender has to also pass the private payloads of the previous transactions in which they received the money. This includes the preceding transaction, the one before the preceding, and so on, all the way back until the original issuing transaction. This results in a rather large size of information transmitted privately between the sender and the recipient as well as partial exposure of the previous owners (or rather, their pseudonymous addresses) of the coins to the future owners. Even though the exposure is limited, this is not ideal but still offers better privacy than public assets where transactions immediately become visible to everybody.

To contain this issue and increase privacy, Blackbytes use fixed denominations similar to coins and notes which are usually issued in denominations of 1, 2, 5, 10, 20, 50, and so on, where each coin has its individual history but coins cannot be merged (e.g. you cannot fuse two 5s to form a 10) . The impossibility of merging means that when a coin’s history is traced back, its history never splits in two. Hence, both the size of the history and information exposure grow only linearly rather than exponentially. Additionally, whenever transactions are initiated, they take from the highest denominations possible in order to minimize the number of coins and histories to be transmitted.

[image try to depict several chains of ownership, e.g. a 5 goes from A to B to C while a 10 goes from X to Y to C]

## Using Blackbytes
Since private payloads have to be sent along with each payment, Blackbytes payments are different from payments with public assets. There are two ways to send Blackbytes:

### By pairing in chat 
The sender and the receiver need to pair their wallets in chat. Then, the receiver sends their Obyte address through the chat. The sender clicks it, selects the option to send payment, and chooses Blackbytes as the asset to pay in. Private payloads are automatically sent through the chat-based communication channel. Alternatively, the recipient can create a payment request in their wallet and the sender needs only to click it to accept.

## By textcoins
The sender selects Blackbytes as the asset they want to send, chooses “share via message” option, and saves a [textcoin](/platform/textcoins) file that is created as a result of the payment. Then, they send this file to the recipient over any communication channel and the recipient double-clicks the file in order to receive the payment.

![](private-textcoin-file.png)

## Trading blackbytes
Blackbytes can be traded on [blackbytes.io](https://blackbytes.io) exchange.

## Creating other privacy tokens on Obyte
Blackbytes is just one privacy token on Obyte which is special only in that it was distributed along with Bytes during the initial distribution, thus there are thousands of holders of this token. Other similar tokens can be created mimicking the features of Blackbytes if such privacy levels are desired for the new token. During token creation, when the attributes “is_private” and “fixed_denominations” are designated as “true”, then the token can replicate the privacy feature.

For developers interested in creating a privacy token on Obyte, see the documentation about [token creation](https://developer.obyte.org/issuing-assets-on-byteball), including creation of privacy tokens, on the developer resource portal.


