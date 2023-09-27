# Introduction and Overview

## Ledgers
Ledgers are used to record transactions in a chain of blocks. One block references its parent block forming a blockchain that is immutable without changing all previous blocks in the chain. 
The internet computer utilizes two different types of ledgers. The first ledger to exist on the internet computer is the ICP Ledger. It is part of the [NNS](/tokenomics/nns/nns-intro.md) and the canister implementing
the ICP Ledger is running on the NNS subnet. The second type of ledger that you will find on the internet computer is ICRC-1 Ledgers. In this overview, both ledger types
will be explained and their differences will be highlighted. 

### ICP Ledger
The main purpose of the ICP Ledger is to record `burn`, `mint` and most commonly `transfer` transactions with regards to the internet computer's native [token](/docs/concepts/tokens-cycles.md) `ICP`.
The canister implementing the ICP ledger services transaction requests and offers a variety of endpoints to fetch data and information about the state of the ICP Ledger.
There only exists one ICP Ledger on the internet computer. 

### ICRC-1 Ledgers
ICRC stands for `Internet Computer Request for Comments` and is a working group for various topics on the internet computer. A general documentation of ICRC can be found [here](https://github.com/dfinity/ICRC).
The working group released a standard for new tokens on the internet computer. To create a new token, one requires a ledger to record all transactions made with this token. This is where the ICRC-1 standard comes in. 
It is a standard created by the internet computer working group that defines the general functionalities of ledgers. All tokens and their corresponding ledgers that wish to support this standard have to fulfil all requirements
specified in the standard. You can find a detailed description of the ICRC-1 standard [here](https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/README.md).

Additionally to the ICRC-1 standard, there have been discussions around further specifications and functionalities. One of the results of these discussions is an extension
of the ICRC-1 standard called [ICRC-2](https://github.com/dfinity/ICRC-1/tree/main/standards/ICRC-2). It deals with `approve` and `transfer_from` transactions. A concept that has seen wide adoption among other token standards. 
There may be further standards that serve as extensions to the ICRC-1 standard, however, not all ICRC standards necessarily have to be extensions of ICRC-1. 

The purpose of the ICRC-1 Ledger thus is to create a universally accepted standard for making and recording transactions for tokens on the internet computer. 

### The difference between ICP and ICRC-1 Ledgers
The biggest difference between the two is that the ICP Ledger is a specific implementation of a ledger, which at first followed no official standard. It had existed before ICRC-1 was discussed or created. 
ICRC-1 on the other hand is a standard, not a specific implementation of some ledger. There does exist a [reference implementation](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icrc1/ledger) by the Dfinity Foundation, but there may be different ICRC-1 Ledgers with different implementations that
all follow the same standard. The reference implementation and the ICP Ledger share a lot of similarities. However, they do have different endpoints, different transaction and block objects and quite a few other more subtle differences. 

The biggest and most important difference between the ICP Ledger and the ICRC-1 standard (and thus its reference implementation) is how they define accounts. Both are account-based but the ICRC-1 standard [specifies](https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/README.md#account) `Accounts` as a struct that contains a `principal` and an optional `subaccount`.
The ICP Ledger uses `AccountIdentifiers` as its account representation. You can find a detailed description of `AccountIdentifier` [here](https://mmapped.blog/posts/13-icp-ledger#account-id). An`AccountIdentifier` essentially is a hash of the ICRC-1 `Account`. An `Account` can thus be converted into an `AccountIdentifier` but not the other
way around. This provides the benefit of providing a certain degree of anonymity to the ICP Ledger, but it also means that the ICP Ledger can never have the same internal representation as ICRC-1 Ledgers. 

In an attempt to comply with the ICRC-1 standard, the ICP Ledger implements all endpoints defined in the ICRC-1 standard. However, this does not mean that the ICP Ledger is an ICRC-1 Ledger. The ICRC-1 standard clearly defines how accounts should be represented.
The ICP Ledger, due to its use of AccountIdentifiers, cannot fulfil this requirement. The ICP Ledger successfully implements all ICRC-1 endpoints and they can be used for any other ICRC-1 endpoint. 
Should a future ICRC-1 extension standard or the use of index canisters result in the exposure of the internal representation of accounts, any ICRC-1 Ledger will deviate from the ICP Ledger. 