// genera-chiavi.mjs
import { generateKeyPair, exportJWK } from 'jose';
import fs from 'fs';
import { randomUUID } from 'crypto';

async function run() {
    const { publicKey, privateKey } = await generateKeyPair('RS256', {
        modulusLength: 2048,
        extractable: true,
    });

    const privateJWK = await exportJWK(privateKey);

    privateJWK.kid = randomUUID()
    privateJWK.alg = 'RS256';
    privateJWK.use = 'sig';

    const jwks = { keys: [privateJWK] };
    fs.writeFileSync('jwks.json', JSON.stringify(jwks, null, 2));
}

run();
