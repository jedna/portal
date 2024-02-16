// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    

  build: [
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "doc",
          label: "Overview of ICP",
          id: "developer-docs/getting-started/overview-of-icp",
        },
        {
          type: "doc",
          label: "Development workflow",
          id: "developer-docs/getting-started/development-workflow",
        },
        {
          type: "doc",
          label: "Hello, world!",
          id: "developer-docs/getting-started/hello-world",
        },
        {
          type: "doc",
          label: "Install the IC SDK",
          id: "developer-docs/getting-started/install/index",
        },
        {
          type: "doc",
          label: "Developer accounts",
          id: "developer-docs/getting-started/accounts",
        },
        {
          type: "category",
          label: "Cycles",
          items: [
            "developer-docs/getting-started/cycles/cycles-faucet",
            "developer-docs/getting-started/cycles/cycles-wallet",
            "developer-docs/getting-started/cycles/converting_icp_tokens_into_cycles",
          ],
        }, 
        {
          type: "doc",
          label: "Default project template",
          id: "developer-docs/getting-started/default-template",
        },
        {
          type: "category",
          label: "Deploy smart contracts",
          items: [
            {
              type: "doc",
              label: "Local deployment",
              id: "developer-docs/getting-started/deploy/local",
            },
            {
              type: "doc",
              label: "Mainnet deployment",
              id: "developer-docs/getting-started/deploy/mainnet",
            },
          ],
        },
      {
      type: "category",
      label: "Quickstart guides",
      items: [
        {
          type: "doc",
          label: "Quickstart for React developers",
          id: "developer-docs/getting-started/quickstart/react-quickstart",
        },
      ],
    },
      ],
    },
    {
      type: "category",
      label: "Developer tools",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-docs/developer-tools/dev-tools-overview",
        },
        {
          type: "category",
          label: "Command line",
          items: [
            {
              type: "category",
              label: "dfx",
              link: {
                type: "doc",
                id: "developer-docs/developer-tools/cli-tools/cli-reference/index",
              },
              items: [
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-parent",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-bootstrap",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-build",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-cache",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-canister",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-deploy",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-deps",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-generate",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-help",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-identity",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-info",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-ledger",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-new",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-nns",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-ping",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-quickstart",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-replica",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-schema",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-sns",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-start",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-stop",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-upgrade",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-wallet",
                "developer-docs/developer-tools/cli-tools/cli-reference/dfx-envars",
                "developer-docs/developer-tools/cli-tools/dfx-json-reference",
              ],
            },
            {
              type: "category",
              label: "dfxvm",
              items: [
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfx/dfx",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-default",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-install",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm-init/dfxvm-init",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-list",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-self-uninstall",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-self-update",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-uninstall",
                "developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfxvm/dfxvm-update",
              ],
            },
            {
              type: "category",
              label: "quill",
              link: {
                type: "doc",
                id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/index",
              },
              items: [
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-parent",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-account-balance",
                {
                  type: "category",
                  label: "quill ckbtc",
                  link: {
                    type: "doc",
                    id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc",
                  },
                  items: [
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-retrieve-btc-status",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-transfer",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-update-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/ckbtc/quill-ckbtc-withdrawal-address",
                  ],
                },
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-claim-neurons",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-generate",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-neuron-info",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-get-proposal-info",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-neurons",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-list-proposals",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-manage",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-neuron-stake",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-public-ids",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-qr-code",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-replace-node-provider-id",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-scanner-qr-code",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-send",
                {
                  type: "category",
                  label: "quill sns",
                  link: {
                    type: "doc",
                    id: "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns",
                  },
                  items: [
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-balance",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-configure-dissolve-delay",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-disburse",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-disburse-maturity",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-follow-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-get-sale-participation",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-get-swap-refund",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-list-deployed-snses",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-make-proposal",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-make-upgrade-canister-proposal",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-neuron-permission",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-new-sale-ticket",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-pay",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-register-vote",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-split-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-stake-maturity",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-stake-neuron",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-status",
                    "developer-docs/developer-tools/cli-tools/quill-cli-reference/sns/quill-sns-transfer",
                  ],
                },
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-transfer",
                "developer-docs/developer-tools/cli-tools/quill-cli-reference/quill-update-node-provider",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Off-chain libraries",
          items: [
            {
              type: "category",
              label: "Agents",
              items: [
                "developer-docs/developer-tools/off-chain/agents/overview",
                "developer-docs/developer-tools/off-chain/agents/javascript-agent",
                "developer-docs/developer-tools/off-chain/agents/nodejs",
                "developer-docs/developer-tools/off-chain/agents/rust-agent",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "On-chain libraries",
          items: [
            {
              type: "doc",
              id: "developer-docs/developer-tools/on-chain/cdks",
              },
          ],
        },
        {
          type: "category",
          label: "IDE",
          items: [
            "developer-docs/developer-tools/ide/vs-code",
            "developer-docs/developer-tools/ide/playground",
            "developer-docs/developer-tools/ide/gitpod",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Smart contracts",
      items: [
        {
	  type: "category",
          label: "Overview",
          link: {
            type: "doc",
            id: "developer-docs/smart-contracts/overview",
          },
          items: [
            "developer-docs/backend/choosing-language",
          ],
        },
        {
          type: "doc",
          label: "Build",
          id: "developer-docs/setup/build",
        },
        {
          type: "category",
          label: "Call",
          link: {
            type: "doc",
            id: "developer-docs/smart-contracts/call-overview",
	  },
          items: [
            {
              type: "category",
              label: "Candid",
              items: [
                "developer-docs/backend/candid/candid-concepts",
                "developer-docs/backend/candid/candid-howto",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Deploy",
          items: [
            "developer-docs/setup/deploy",
            "developer-docs/production/larger-wasm",
            "developer-docs/production/social-sharing",
          ],
        },
        {
          type: "category",
          label: "Maintain",
          items:[
            "developer-docs/setup/delete",
             "developer-docs/production/canister-history",
             "developer-docs/setup/pulling-canister-dependencies",
             "developer-docs/production/canister-recovery",
             "developer-docs/setup/state",
             "developer-docs/setup/manage-canisters",
             "developer-docs/production/storage",
             "developer-docs/setup/upgrade",
             "developer-docs/production/resource-limits",
             {
              type: "category",
              label: "Cost",
              items: [
             "developer-docs/gas-cost",
             "developer-docs/cost-estimations-and-examples",
              ],
            },
            {
              type: "category",
              label: "Topping up canisters",
              items: [
                "developer-docs/production/topping-up-canister",
                "developer-docs/getting-started/cycles/cycles_management_services",
              ],
            },
          ]
        },
        {
          type: "category",
          label: "Test",
          items: [
            "developer-docs/setup/pocket-ic",
            "developer-docs/production/staging-environment",
            "developer-docs/backend/reproducible-builds",
            "developer-docs/backend/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Advanced features",
          items: [
            {
              type: "doc",
              label: "Composite queries",
              id: "developer-docs/integrations/composite-query/composite-query",
            },
            {
              type: "category",
              label: "Encryption and signatures",
              items: [
                {
                  type: "doc",
                  label: "Verifying signatures",
                  id: "developer-docs/integrations/independently-verifying-ic-signatures",
                },
                {
                  type: "category",
                  label: "On-chain signatures: Threshold ECDSA",
                  link: {
                    type: "doc",
                    id: "developer-docs/integrations/t-ecdsa/index",
                  },
                  items: [],
                },
                {
                  type: "category",
                  label: "On-chain encryption: vetKeys",
                  items: [
                    "developer-docs/integrations/vetkeys/index",
                    "developer-docs/integrations/vetkeys/using-vetkeys",
                  ],
                },
                {
                  type: "category",
                  label: "Make an HTTP request",
                  link: {
                    type: "doc",
                    id: "developer-docs/integrations/https-outcalls/https-outcalls-overview",
                  },
                  items: [],
                },
              ],
            },
            "developer-docs/backend/periodic-tasks",
          ],
        },
        {
          type: "category",
          label: "Best practices",
          items: [
            {
              type: "doc",
              label: "Architecture",
              id: "developer-docs/setup/best-practices/architecture",
            },
            {
              type: "doc",
              label: "General",
              id: "developer-docs/setup/best-practices/general",
            },
            {
              type: "doc",
              label: "Storage",
              id: "developer-docs/setup/best-practices/storage",
            },
            {
              type: "doc",
              label: "Troubleshooting latency",
              id: "developer-docs/setup/best-practices/troubleshooting",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Web apps",
      items: [
        {
          type: "category",
          label: "Application frontends",
          items: [
            "developer-docs/frontend/index",
            "developer-docs/frontend/custom-frontend",
            "developer-docs/frontend/add-stylesheet",
            "developer-docs/frontend/boilerplate-frontend",
            "developer-docs/frontend/existing-frontend",
          ],
        },
        {
          type: "category",
          label: "Custom domains",
          items: [
            "developer-docs/production/custom-domain/custom-domain",
            "developer-docs/production/custom-domain/dns-setup"],
        },
        "developer-docs/backend/design-dapps",
        {
          type: "category",
          label: "HTTPS outcalls",
          items: [
            "developer-docs/integrations/https-outcalls/https-outcalls-how-to-use",
            "developer-docs/integrations/https-outcalls/https-outcalls-get",
            "developer-docs/integrations/https-outcalls/https-outcalls-post",
          ],
        },
        {
          type: "category",
          label: "User sign-up and login",
          items: [
            {
              type: "category",
              label: "Internet Identity (II)",
              items: [
                "developer-docs/integrations/internet-identity/overview",
                "developer-docs/integrations/internet-identity/creating-ii",
                "developer-docs/integrations/internet-identity/integrate-identity",
                "developer-docs/integrations/internet-identity/alternative-origins",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
          {
            type: "category",
            label: "Security best practices",
            items: [
              {
                type: "doc",
                label: "General",
                id: "developer-docs/security/general-security-best-practices",
              },
              {
                type: "doc",
                label: "Rust",
                id: "developer-docs/security/rust-canister-development-security-best-practices",
              },
              {
                type: "doc",
                label: "Web apps",
                id: "developer-docs/security/web-app-development-security-best-practices",
              },
            ],
          },
      ],
    },
    {
      type: "category",
      label: "DeFi",
      items: [
        {
          type: "doc",
            label: "Overview",
            id: "developer-docs/integrations/ledger/introduction_and_overview",
          },
        {
          type: "category",
          label: "ICP tokens",
          items: [
            "developer-docs/integrations/ledger/index",
            "developer-docs/integrations/ledger/collecting-dust",
            "developer-docs/integrations/ledger/ledger-local-setup",
            "developer-docs/integrations/ledger/interact-with-ledger",
            "developer-docs/integrations/ledger/icp-index-local-setup",
          ],
        },
        {
          type: "category",
          label: "ICRC-1 tokens",
          items: [
            "developer-docs/integrations/icrc-1/icrc1-ledger-setup",
            "developer-docs/integrations/icrc-1/interact-with-ICRC-1-ledger",
            "developer-docs/integrations/icrc-1/icrc1-index-setup"
        ],
        },
        {
          type: "doc",
          label: "Exchange rate canister",
          id: "developer-docs/integrations/exchange-rate/exchange-rate-canister",
        },
        {
          type: "category",
          label: "Rosetta API",
          link: {
            type: "doc",
            id: "developer-docs/integrations/rosetta/index",
          },
          items: [
            "developer-docs/integrations/rosetta/hotkeys",
            "developer-docs/integrations/rosetta/neuron-lifecycle",
            "developer-docs/integrations/rosetta/staking-support",
            "developer-docs/integrations/rosetta/staking-tutorial",
            "developer-docs/integrations/rosetta/transfers",
          ],
        },
        {
          type: "category",
          label: "Asset custody",
          items: [
            "tokenomics/token-holders/custody-options-intro",
            "tokenomics/token-holders/self-custody-quickstart"],
        },
        {
          type: "category",
          label: "NFTs",
          items: [
            "developer-docs/use-cases/considerations-for-nft-devs",
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Multi-chain",
      items: [
         {
          type: "category",
          label: "FAQs",
          items: [
            "developer-docs/integrations/multi-chain/user-faq",
            "developer-docs/integrations/multi-chain/ckbtc-faq",
            "developer-docs/integrations/multi-chain/cketh-faq",
            "developer-docs/integrations/multi-chain/ckerc20-faq",
            "developer-docs/integrations/multi-chain/signatures-faq",
          ],
        },
        {
          type: "category",
          label: "Bitcoin",
          items: [
            "developer-docs/integrations/bitcoin/index",
            "developer-docs/integrations/bitcoin/ckbtc",
            {
              type: "category",
              label: "Advanced",
              items: [
                "developer-docs/integrations/bitcoin/read-state",
                "developer-docs/integrations/bitcoin/submit-transactions",
                "developer-docs/integrations/bitcoin/local-development",
              ]
            }
          ],
        },
        {
          type: "category",
          label: "Ethereum",
          items: [
            "developer-docs/integrations/ethereum/overview",
            "developer-docs/integrations/ethereum/evm-rpc",
          ],
        },
      ],
    },
   
    {
      type: "category",
      label: "DAOs",
      link: {
        type: "doc",
        id: "developer-docs/integrations/sns/index",
      },
      items: [
        {
          type: "category",
          label: "Network Nervous System (NNS)",
          items: [
            "tokenomics/nns/nns-intro",
            "tokenomics/token-holders/nns-app-quickstart",
            "tokenomics/nns/neurons-fund",
            "tokenomics/nns/nns-staking-voting-rewards",
          ],
        },
        {
          type: "category",
          label: "Introduction to the SNS",
          items: [
            "developer-docs/integrations/sns/introduction/sns-intro-high-level",
            "developer-docs/integrations/sns/introduction/sns-architecture",
            "developer-docs/integrations/sns/introduction/sns-launch",
            "developer-docs/integrations/sns/introduction/dao-alternatives",
          ],
        },
        {
          type: "category",
          label: "Preparing an SNS launch",
          link: {
            type: "doc",
            id: "developer-docs/integrations/sns/tokenomics/index",
          },
          items: [
            "developer-docs/integrations/sns/tokenomics/sns-checklist",
            "developer-docs/integrations/sns/tokenomics/predeployment-considerations",
            "developer-docs/integrations/sns/tokenomics/tokenomics-intro",
            "developer-docs/integrations/sns/tokenomics/rewards",
            "developer-docs/integrations/sns/tokenomics/preparation",
          ],
        },
        {
          type: "category",
          label: "Integrating with an SNS",
          link: {
            type: "doc",
            id: "developer-docs/integrations/sns/integrating/index",
          },
          items: [
            "developer-docs/integrations/sns/integrating/ledger-integration",
            "developer-docs/integrations/sns/integrating/index-integration",
            "developer-docs/integrations/sns/integrating/frontend-integration",
          ],
        },
        {
          type: "category",
          label: "Testing an SNS",
          link: {
            type: "doc",
            id: "developer-docs/integrations/sns/testing/testing-before-launch",
          },
          items: [
            "developer-docs/integrations/sns/testing/testing-locally",
            "developer-docs/integrations/sns/testing/testing-on-mainnet",
          ],
        },
        {
          type: "category",
          label: "Launching an SNS",
          link: {
            type: "doc",
            id: "developer-docs/integrations/sns/launching/index",
          },
          items: [
            "developer-docs/integrations/sns/launching/launch-summary-1proposal",
            "developer-docs/integrations/sns/launching/launch-steps-1proposal",
          ],
        },
        {
          type: "category",
          label: "Managing an SNS",
          link: {
            type: "doc",
            id: "developer-docs/integrations/sns/managing/manage-sns-intro",
          },
          items: [
            "developer-docs/integrations/sns/managing/making-proposals",
            "developer-docs/integrations/sns/managing/cycles-usage",
            "developer-docs/integrations/sns/managing/sns-asset-canister",
            "developer-docs/integrations/sns/managing/managing-nervous-system-parameters",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Sample apps",
      items: [
        "samples/overview",
        {
          type: "category",
          label: "Hosting",
          items: [
            "references/samples/hosting/godot-html5-template/README",
            "references/samples/hosting/photo-storage/README",
            "references/samples/hosting/static-website/README",
            "references/samples/hosting/unity-webgl-template/README",
          ],
        },
        {
          type: "category",
          label: "Motoko",
          items: [
            "references/samples/motoko/actor_reference/README",
            "references/samples/motoko/auth_client_demo/README",
            "references/samples/motoko/basic_bitcoin/README",
            "references/samples/motoko/basic_dao/README",
            "references/samples/motoko/calc/README",
            "references/samples/motoko/cert-var/README",
            "references/samples/motoko/classes/README",
            "references/samples/motoko/composite_query/README",
            "references/samples/motoko/counter/README",
            {
              type: "doc",
              label: "CRUD example",
              id: "references/samples/motoko/superheroes/README",
            },
            "references/samples/motoko/defi/README",
            "references/samples/motoko/dip721-nft-container/README",
            "references/samples/motoko/echo/README",
            "references/samples/motoko/encrypted-notes-dapp-vetkd/README",
            "references/samples/motoko/encrypted-notes-dapp/README",
            "references/samples/motoko/factorial/README",
            "references/samples/motoko/life/README",
            "references/samples/motoko/hello_cycles/README",
            "references/samples/motoko/http_counter/README",
            "references/samples/motoko/send_http_get/README",
            "references/samples/motoko/send_http_post/README",
            "references/samples/motoko/ic-pos/README",
            "references/samples/motoko/icrc2-swap/README",
            "references/samples/motoko/internet_identity_integration/README",
            "references/samples/motoko/invoice-canister/README",
            "references/samples/motoko/ios-notifications/README",
            "references/samples/motoko/ledger-transfer/README",
            "references/samples/motoko/minimal-counter-dapp/README",
            "references/samples/motoko/persistent-storage/README",
            "references/samples/motoko/phone-book/README",
            "references/samples/motoko/pub-sub/README",
            "references/samples/motoko/quicksort/README",
            "references/samples/motoko/random_maze/README",
            "references/samples/motoko/simple-to-do/README",
            "references/samples/motoko/threshold-ecdsa/README",
            "references/samples/motoko/vetkd/README",
            "references/samples/motoko/whoami/README",
          ],
        },
        {
          type: "category",
          label: "Rust",
          items: [
            "references/samples/rust/basic_bitcoin/README",
            "references/samples/rust/basic_dao/README",
            "references/samples/rust/canister-info/README",
            "references/samples/rust/composite_query/README",
            "references/samples/rust/counter/README",
            "references/samples/rust/defi/README",
            "references/samples/rust/dip721-nft-container/README",
            "references/samples/rust/encrypted-notes-dapp-vetkd/README",
            "references/samples/rust/encrypted-notes-dapp/README",
            "references/samples/rust/send_http_get/README",
            "references/samples/rust/send_http_post/README",
            "references/samples/rust/nft-wallet/README",
            "references/samples/rust/performance_counters/README",
            "references/samples/rust/periodic_tasks/README",
            "references/samples/rust/pub-sub/README",
            "references/samples/rust/qrcode/README",
            "references/samples/rust/threshold-ecdsa/README",
            "references/samples/rust/tokens_transfer/README",
            "references/samples/rust/vetkd/README",
          ],
        },
       ],
    },
    {
      type: "category",
      label: "Bootcamps",
      items: [
    {
      type: "category",
      label: "Developer journey",
      link: {
        type: "doc",
        id: "tutorials/developer-journey/index",
      },
      items: [
        {
          type: "category",
          label: "Level 0: Pre-flight operations",
          link: {
            type: "doc",
            id: "tutorials/developer-journey/level-0/index",
          },
          items: [
            "tutorials/developer-journey/level-0/ic-overview",
            "tutorials/developer-journey/level-0/ic-terms",
            "tutorials/developer-journey/level-0/dev-env",
            "tutorials/developer-journey/level-0/intro-canisters",
            "tutorials/developer-journey/level-0/intro-languages",
            "tutorials/developer-journey/level-0/intro-dfx",
          ],
        },
        {
          type: "category",
          label: "Level 1: Space cadet",
          link: {
            type: "doc",
            id: "tutorials/developer-journey/level-1/index",
          },
          items: [
                "tutorials/developer-journey/level-1/1.1-live-demo",
                "tutorials/developer-journey/level-1/1.2-motoko-lvl1",
                "tutorials/developer-journey/level-1/1.3-first-dapp",
                "tutorials/developer-journey/level-1/1.4-using-cycles",
                "tutorials/developer-journey/level-1/1.5-deploying-canisters",
                "tutorials/developer-journey/level-1/1.6-managing-canisters",
              ],
            },
        {
          type: "category",
          label: "Level 2: Space explorer",
          link: {
            type: "doc",
            id: "tutorials/developer-journey/level-2/index",
        },
          items: [
            "tutorials/developer-journey/level-2/2.1-storage-persistence",
            "tutorials/developer-journey/level-2/2.2-advanced-canister-calls",
            "tutorials/developer-journey/level-2/2.3-third-party-canisters",
            "tutorials/developer-journey/level-2/2.4-intro-candid",
            "tutorials/developer-journey/level-2/2.5-unit-testing",
            "tutorials/developer-journey/level-2/2.6-motoko-lvl2",
          ],
        },
        {
          type: "category",
          label: "Level 3: Space engineer",
          link: {
            type: "doc",
            id: "tutorials/developer-journey/level-3/index",
        },
          items: [
            "tutorials/developer-journey/level-3/3.1-package-managers",
            "tutorials/developer-journey/level-3/3.2-https-outcalls",
            "tutorials/developer-journey/level-3/3.3-certified-data",
            "tutorials/developer-journey/level-3/3.4-intro-to-agents",
            "tutorials/developer-journey/level-3/3.5-identities-and-auth",
            "tutorials/developer-journey/level-3/3.6-motoko-lvl3",
          ],
        },
        {
          type: "category",
          label: "Level 4: Space pilot",
          link: {
            type: "doc",
            id: "tutorials/developer-journey/level-4/index",
        },
          items: [
            "tutorials/developer-journey/level-4/4.1-icp-ledger",
            "tutorials/developer-journey/level-4/4.2-icrc-tokens",
            "tutorials/developer-journey/level-4/4.3-ckbtc-and-bitcoin",
            "tutorials/developer-journey/level-4/4.4-nns-governance",
            "tutorials/developer-journey/level-4/4.5-using-quill",
            "tutorials/developer-journey/level-4/4.6-motoko-lvl4",
          ],
        },
        {
          type: "category",
          label: "Level 5: Internet Computer astronaut",
          link: {
            type: "doc",
            id: "tutorials/developer-journey/level-5/index",
        },
          items: [
            "tutorials/developer-journey/level-5/5.1-vetKeys-tutorial",
            "tutorials/developer-journey/level-5/5.2-ICP-ETH-tutorial",
            "tutorials/developer-journey/level-5/5.3-token-swap-tutorial",
            "tutorials/developer-journey/level-5/5.4-NFT-tutorial",
            "tutorials/developer-journey/level-5/5.5-auction-tutorial",
            "tutorials/developer-journey/level-5/5.6-next-steps",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Hackathon prep course",
      link: {
        type: "doc",
        id: "tutorials/hackathon-prep-course/index",
      },
      items: [
        "tutorials/hackathon-prep-course/what-is-icp",
        "tutorials/hackathon-prep-course/deploying-first-fullstack-dapp",
        "tutorials/hackathon-prep-course/exploring-the-backend",
        "tutorials/hackathon-prep-course/exploring-the-frontend",
        "tutorials/hackathon-prep-course/integrating-with-tokens",
        "tutorials/hackathon-prep-course/authentication",
        "tutorials/hackathon-prep-course/obtaining-cycles",
        "tutorials/hackathon-prep-course/managing-canisters",
        "tutorials/hackathon-prep-course/sample-starter-projects",
        "tutorials/hackathon-prep-course/resources",
      ],
    },
    ],
    },
    {
      type: "category",
      label: "Core concepts",
      items: [
        "concepts/canisters-code",
        "concepts/governance",
        "concepts/nodes-subnets",
        "developer-docs/backend/subnet-types",
        "concepts/tokens-cycles",
        "concepts/trust-in-canisters",
        "references/glossary",
      ],
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "category",
          label: "Internet Computer specification",
          items: [
            "references/http-gateway-protocol-spec",
            "references/ic-interface-spec",
            "references/id-encoding-spec",
          ],
        },
        {
          type: "category",
          label: "Languages",
          items: [
            "references/candid-ref",
            {
              type: "link",
              label: "Motoko base library",
              href: "/docs/current/motoko/main/base/",
            },
            {
              type: "link",
              label: "Rust CDK references",
              href: "https://docs.rs/ic-cdk/",
            },
          ],
        },
        {
          type: "category",
          label: "Core services",
          items: [
            {
              type: "doc",
              label: "Asset canister",
              id: "references/asset-canister",
            },
            {
              type: "doc",
              label: "ICRC-1 token standard",
              id: "developer-docs/integrations/icrc-1/index"
            },
            {
              type: "doc",
              label: "Internet Identity",
              id: "references/ii-spec",
            },
            {
              type: "doc",
              label: "Ledger canister",
              id: "references/ledger",
            },
        ],
        },
        {
          type: "category",
          label: "Feature references",
          items: [
            "developer-docs/integrations/bitcoin/bitcoin-how-it-works",
            "developer-docs/integrations/bitcoin/ckbtc-reference",
            "developer-docs/integrations/https-outcalls/https-outcalls-how-it-works",
            "developer-docs/integrations/t-ecdsa/t-ecdsa-how-it-works",
            "developer-docs/integrations/vetkeys/technology-overview",
          ],
        },
      ],
    },
  ],
  rust: [
    {
      type: "category",
      label: "Building with Rust",
      link: {
        type: "doc",
        id: "developer-docs/backend/rust/index",
      },
      items: [
        "developer-docs/backend/rust/infrastructure",
        "developer-docs/backend/rust/project-organization",
        "developer-docs/backend/rust/dev-env",
        "developer-docs/backend/rust/quickstart",
        "developer-docs/backend/rust/deploying",
        "developer-docs/backend/rust/intercanister",
        "developer-docs/backend/rust/upgrading",
        "developer-docs/backend/rust/optimizing",
        "developer-docs/backend/rust/counter",
        "developer-docs/backend/rust/timers",
        "developer-docs/backend/rust/stable-structures",
        "developer-docs/backend/rust/searching-records",
        "developer-docs/backend/rust/access-control",
        "developer-docs/backend/rust/candid",
        "developer-docs/backend/rust/samples",
        "developer-docs/backend/candid/generating-candid",
      ],
    },
  ],
  motoko: [
    "motoko/main/motoko",
    "motoko/tutorial",
    {
      type: "category",
      label: "Building with Motoko",
      link: {
        type: "doc",
        id: "developer-docs/backend/motoko/index",
      },
      items: [
        "developer-docs/backend/motoko/infrastructure",
        "developer-docs/backend/motoko/explore-templates",
        "developer-docs/backend/motoko/dev-env",
        "developer-docs/backend/motoko/at-a-glance",
        "developer-docs/backend/motoko/deploying",
        "developer-docs/backend/motoko/upgrading",
        "developer-docs/backend/motoko/intercanister-calls",
        "developer-docs/backend/motoko/optimizing",
        "developer-docs/backend/motoko/phonebook",
        "developer-docs/backend/motoko/calculator",
        "developer-docs/backend/motoko/counter-tutorial",
        "developer-docs/backend/motoko/hello-location",
        "developer-docs/backend/motoko/simple-cycles",
        "developer-docs/backend/motoko/define-an-actor",
        "developer-docs/backend/motoko/multiple-actors",
        "developer-docs/backend/motoko/access-control",
        "developer-docs/backend/motoko/candid-ui",
        "developer-docs/backend/motoko/scalability-cancan",
        "developer-docs/backend/motoko/sample-apps",
        "developer-docs/backend/motoko/mo-doc",
      ],
    },
    {
      type: "category",
      label: "Motoko developer guide",
      link: {
        type: "doc",
        id: "motoko/main/about-this-guide",
      },
      items: [
        "motoko/version",
        "motoko/main/overview",
        "motoko/main/basic-concepts",
        "motoko/main/base-intro",
        "motoko/main/language-manual",
        "motoko/main/style",
        "motoko/main/motoko-grammar",
        "motoko/main/actors-async",
        "motoko/main/actor-classes",
        "motoko/main/caller-id",
        "motoko/main/compatibility",
        "motoko/main/compiler-ref",
        "motoko/main/control-flow",
        "motoko/main/cycles",
        "motoko/main/errors",
        "motoko/main/heartbeats",
        "motoko/main/local-objects-classes",
        "motoko/main/message-inspection",
        "motoko/main/modules-and-imports",
        "motoko/main/mutable-state",
        "motoko/main/pattern-matching",
        "motoko/main/sharing",
        "motoko/main/stablememory",
        "motoko/main/stable-regions",
        "motoko/main/structural-equality",
        "motoko/main/timers",
        "motoko/main/upgrades",
      ],
    },
    {
      type: "category",
      label: "Motoko base library reference",
      link: {
        type: "doc",
        id: "motoko/main/base/index",
      },
      items: [
        "motoko/main/base/Array",
        "motoko/main/base/AssocList",
        "motoko/main/base/Blob",
        "motoko/main/base/Bool",
        "motoko/main/base/Buffer",
        "motoko/main/base/CertifiedData",
        "motoko/main/base/Char",
        "motoko/main/base/Debug",
        "motoko/main/base/Deque",
        "motoko/main/base/Error",
        "motoko/main/base/ExperimentalCycles",
        "motoko/main/base/ExperimentalInternetComputer",
        "motoko/main/base/ExperimentalStableMemory",
        "motoko/main/base/Float",
        "motoko/main/base/Func",
        "motoko/main/base/Hash",
        "motoko/main/base/HashMap",
        "motoko/main/base/Heap",
        "motoko/main/base/Int",
        "motoko/main/base/Int8",
        "motoko/main/base/Int16",
        "motoko/main/base/Int32",
        "motoko/main/base/Int64",
        "motoko/main/base/Iter",
        "motoko/main/base/IterType",
        "motoko/main/base/List",
        "motoko/main/base/Nat",
        "motoko/main/base/Nat8",
        "motoko/main/base/Nat16",
        "motoko/main/base/Nat32",
        "motoko/main/base/Nat64",
        "motoko/main/base/Option",
        "motoko/main/base/Order",
        "motoko/main/base/Prelude",
        "motoko/main/base/Principal",
        "motoko/main/base/Random",
        "motoko/main/base/RBTree",
        "motoko/main/base/Region",
        "motoko/main/base/Result",
        "motoko/main/base/Stack",
        "motoko/main/base/Text",
        "motoko/main/base/Time",
        "motoko/main/base/Timer",
        "motoko/main/base/Trie",
        "motoko/main/base/TrieMap",
        "motoko/main/base/TrieSet",
      ],
    },
  ],
solidity: [
    {
      type: "doc",
      label: "Solidity",
      id: "developer-docs/backend/solidity/index",
    },
],
python: [
  {
    type: "doc",
    label: "Python",
    id: "developer-docs/backend/python/index",
  },
],
typescript: [
  {
    type: "doc",
    label: "TypeScript",
    id: "developer-docs/backend/typescript/index",
  },
],


};
module.exports = sidebars;
