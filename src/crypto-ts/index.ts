// LIB /////////////////////////////////////////////////////////////////////////////////////////////

import { WordArray } from './lib/WordArray';
import { BlockCipher } from './lib/BlockCipher';
import { CipherParams } from './lib/CipherParams';
import { Hasher } from './lib/Hasher';
import { SerializableCipher } from './lib/SerializableCipher';
import { PasswordBasedCipher } from './lib/PasswordBasedCipher';

export const lib = {
    BlockCipher: BlockCipher,
    WordArray: WordArray,
    CipherParams: CipherParams,
    Hasher: Hasher,
    SerializableCipher: SerializableCipher,
    PasswordBasedCipher: PasswordBasedCipher
};

// ALGORITHMS //////////////////////////////////////////////////////////////////////////////////////

import { AES as AESAlgorithm } from './algo/AES';

export const algo = {
    AES: AESAlgorithm
};

// ENCODINGS ///////////////////////////////////////////////////////////////////////////////////////

import { Utf8 } from './enc/Utf8';
import { Hex } from './enc/Hex';

export const enc = {
    Utf8: Utf8,
    Hex: Hex
};

// PADDING /////////////////////////////////////////////////////////////////////////////////////////

import { NoPadding } from './pad/NoPadding';
import { PKCS7 } from './pad/PKCS7';

export const pad = {
    NoPadding: NoPadding,
    PKCS7: PKCS7
};

// MODES ///////////////////////////////////////////////////////////////////////////////////////////

import { CBC } from './mode/CBC';
import { ECB } from './mode/ECB';

export const mode = {
    CBC: CBC,
    ECB: ECB
};

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

export const AES = lib.BlockCipher._createHelper(algo.AES);
