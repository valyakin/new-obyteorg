---
title: 'Payment Channels'
---

# Payment channels
Payment channels allow to organize a sream of micropayments between two parties.

With streaming payments, the buyer device continuously sends small payments to the seller in exchange for small units of service, such as energy (e.g. charging an electric vehicle) or rent. [image]

This way of payment significantly reduces the risks of payments between two parties who don't trust each other since the maximum amout they risk is the small unit of payment or service they exchange in each step.

The two parties (endpoints) of a payment channel can be:
* two IoT devices, e.g. for charging an electric vehicle;
* a user wallet and a IoT device, e.g. for renting a room, a parking place, a drill;
* a user wallet and a server node, e.g. for video streaming paid per minute;
* two server nodes for access to paid APIs;
* a IoT device and a server, again for access to paid APIs, e.g. real time voice recognition or image recognition.

Payment channels are based on [Autonomous Agents](/platform/autonomous-agents) that temporarily lock user funds while the channel is open. All micro payments happen off-chain, and they are therefore **free, instant, and private**. These micropayments gradually move the locked balance within the channel from buyer to seller [image like https://docs.google.com/presentation/d/12d0Ru85gtIooM-kr1bZb3uKpkDfm1Fyjf4FByT335Yg/edit#slide=id.g5e8089d1d5_0_33]. When the provision of service is finished, the parties close the channel and the aggregated payment is settled in a single on-chain transaction.

[BIoT Wallet](https://play.google.com/store/apps/details?id=ws.biot.wallet2) is a PoC wallet that supports payment channels for applications where a user is one of the endpoints.

Developers, see [payment channels library](https://github.com/Papabyte/aa-channels-lib) and [a library for pay-as-you-go API access](https://github.com/byteball/pay-per-call-API).

