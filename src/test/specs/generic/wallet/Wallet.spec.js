describe('Wallet', () => {
    const recipient = Address.unserialize(BufferUtils.fromBase64(Dummy.address1));
    const value = 8888888;
    const fee = 888;
    const nonce = 8;

    it('can create a signed transaction', (done) => {
        const test = async () => {
            const wallet = await Wallet.createVolatile();
            const transaction = await wallet.createTransaction(recipient, value, fee, nonce);
            const isValid = await transaction.verifySignature();
            expect(isValid).toBe(true);
            done();
        };
        test();
    });
});
