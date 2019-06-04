import * as uuidv4 from "uuid/v4";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
let key = null;

export const COOKIE_JWT_ATTRIBUTE = "AUTHORIZATION";
const JWT_ALGORITHM = "HS256";
const XSRF_TOKEN = "XSRF-TOKEN";
export const XSRF_HEADER = "X-XSRF-TOKEN";

export async function setCookies(res) {
    let payload;
    payload.xsrfToken = uuidv4();
    let secret = await createOrLoadSecret();
    let jwtToken = await signWithJwt(payload, secret, { algorithm: JWT_ALGORITHM });

    res.cookie(COOKIE_JWT_ATTRIBUTE, jwtToken, { httpOnly: false });
    res.cookie(XSRF_TOKEN, payload.xsrfToken, { httpOnly: false });
}


function signWithJwt(payload, secret, options) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

export async function verify (jwtString) {
    let secret = await createOrLoadSecret();
    return await verifyWithJwt(jwtString, secret, { algorithms: [JWT_ALGORITHM]});
};



async function createOrLoadSecret() {
    if (key == null) {
        const KEY_SIZE_IN_BITS = 256;
        const BYTE_SIZE = KEY_SIZE_IN_BITS / 8;
        key = crypto.randomBytes(BYTE_SIZE);
    }
    return key;
}

function verifyWithJwt(token, secret, options) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, options, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
}