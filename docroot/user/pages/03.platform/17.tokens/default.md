---
title: Tokens
---

# Issuing tokens

One can easily issue a new token on Obyte, and this token can represent anything. 

Unlike Ethereum, tokens in Obyte are first-class citizen, their transfer is handled by the core and it happens according to the same rules as the transfer of Bytes &mdash; the native currency. Since they exist on the platform level, one doesn't have to reimplement basic transfer functions over and over again for every token, and there is no way these functions can go wrong.

Token supply can be fixed or unlimited. The latter is usually used by [Autonomous Agents](/platform/autonomous-agents) which issue tokens programmatically, strictly according to rules, in a predictable way.

When a new token type is defined, its properties can be tailored to the environment it is going to be used in.

For example, in **regulated environments** the property `cosigned_by_definer` might be useful for compliance and other reasons. This property allows to require that each transaction with the token be cosigned by the issuer (e.g. a financial institution).

Also for regulated environments, `spender_attested` property can be set to restrict ownership and transferrability of the new token only to attested users whose [identity](/platform/identity) has been verified by a trusted attestor. Attestation can include not just having a verified identity but also having some other status such as **accredited investor**, which might be useful for security token offerings (STOs) and is supported by [Obyte ICO platform](https://ico-platform.obyte.org).

Where privacy matters, one can use `is_private` property to make all transfers with the token private, not visible on the DAG, conveyed only directly peer-to-peer between sender and recipient. [Blackbytes](/platform/blackbytes) is one such currency which is also widely distributed as it was distributed along with Bytes.

Loyalty point operators might want to set `is_transferrable` property to `false` (it is `true` by default) if the issuer wants to prohibit the transfer of tokens between users, i.e. disable trading on a secondary market, and only allow them to be redeemed with the issuer.

One can also set more complex conditions for when issue or transfer of tokens is allowed.

Developers, please refer to the [documentation about issuing tokens on Obyte](https://developer.obyte.org/issuing-assets-on-byteball).

[Obyte Asset Registry](https://obyte.app/#!/asset/order) website helps to issue new tokens and set some of their parameters without developer knowledge.
