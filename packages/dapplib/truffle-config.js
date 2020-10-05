require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rescue saddle proud hockey ensure blue gentle'; 
let testAccounts = [
"0xdc66889316cc2ac969e4cc7297e12b1c39421e357e2b5b5973c6d8fafec450f9",
"0xfa3d4988788baeaaca4982c4e50498dc540b0812c7cecdeb096596a5c46be6d2",
"0x46eb3687d997f8d61f71cc0e64e5273c62363047d52b795413c6ad3a3fe2a566",
"0x33fcfa2b56e4a3d2611a1f3bf394fd27a97acfcbc450b9ab7c73b453a6ade62b",
"0x0ae6ef032c6a509716cbd814dd6ffb51b2b08c255f296cf39fac60b49a9fd25f",
"0xa1857bf3c7e4ec4f2d451ff5e8bbf6349ccc715a9e9a7b3be95396b2c98bde4f",
"0xd7bde0876274ea8c8c1263727eb49b472413e278813c530670ae49610f1207d6",
"0x44ec3c4224736f62957a156a08bda9f2a0857f26ac8b1ec7293dfad3ae6c0716",
"0x003d6c3d411c748d9ecf8bbdbe2de2a3dc21d2c9b3a3ef35958549aff55087bc",
"0xf4b4cd90d763f487999ac8dc9b3da6cc204c04d1f6406df4db0fe44dc5e23e8e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
