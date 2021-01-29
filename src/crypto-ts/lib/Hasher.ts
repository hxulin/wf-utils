import { BufferedBlockAlgorithm } from './BufferedBlockAlgorithm';
import { BufferedBlockAlgorithmConfig } from './BufferedBlockAlgorithmConfig';
import { WordArray } from './WordArray';

export abstract class Hasher extends BufferedBlockAlgorithm {

    /**
     * Initializes a newly created hasher.
     *
     * @param cfg (Optional) The configuration options to use for this hash computation.
     */
    public constructor(cfg?: BufferedBlockAlgorithmConfig) {
        // Apply config defaults
        super(Object.assign({
            blockSize: 512 / 32
        }, cfg));

        // Set initial values
        this.reset();
    }

    /**
     * Updates this hasher with a message.
     *
     * @param messageUpdate The message to append.
     *
     * @return This hasher.
     *
     * @example
     *
     *     hasher.update('message');
     *     hasher.update(wordArray);
     */
    update(messageUpdate: WordArray | string): Hasher {
        // Append
        this._append(messageUpdate);

        // Update the hash
        this._process();

        // Chainable
        return this;
    }

    /**
     * Finalizes the hash computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param messageUpdate (Optional) A final message update.
     *
     * @return The hash.
     *
     * @example
     *
     *     let hash = hasher.finalize();
     *     let hash = hasher.finalize('message');
     *     let hash = hasher.finalize(wordArray);
     */
    public finalize(messageUpdate: WordArray | string): WordArray {
        // Final message update
        if(messageUpdate) {
            this._append(messageUpdate);
        }

        // Perform concrete-hasher logic
        const hash = this._doFinalize();

        return hash;
    }

    public abstract _doFinalize(): WordArray;
}
