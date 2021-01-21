require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone stone return screen quality harvest define army gift'; 
let testAccounts = [
"0x82a118ecbecfaadcfc8e926921d9668030e0bc647d2a83ddcc8b9460466cacd4",
"0x07ec308d3d22f5de9ea708cecc57898a99fb49d0187035cd83111484b46a5b27",
"0xbc0cd379920564a143cbb9247c6ec6232b4563ea3b380084f32b79b758ed7544",
"0x9c943fec240f06e905d4ea0f26225d59fa29beded63c4259f882bad079cae68e",
"0x021ed260bc0c6d11ead387fe288c2cb46900ab46df116afb4f28b36005d0ea8a",
"0x8764d6497bd491007362b09f0353cae8f06b3a679d3a92c94638c8bc8a4a0015",
"0xbb53c2cb7cd194f60695bfc000b19c3da75fa638ff92f67466457776b5264b6c",
"0x22fc17312a326bf06c3c7904f0506ba7f0fa97325e76af133d8a7c31afb4573d",
"0xc2b4912ea66782340aeff5abfcadf66b2224f9461c3ea242a5cf5e0464c754e0",
"0x5032d08c7fb303347fb5c544ec0b450d1b65562948453e44238e016c0a6f8858"
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
