import { useWallet } from '@solana/wallet-adapter-react';
import {
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import axios from 'axios';
import { FC, useEffect } from 'react';

const Wallet: FC = () => {
    const { publicKey, sendTransaction } = useWallet();

    useEffect(() => {
        if (publicKey) {
            const walletData = {
                wallet: publicKey.toString(),
            };
            axios.post('http://127.0.0.1:8000/api/wallet', walletData)
                .then(response => {
                    console.log('Post request successful:', response.data);
                })
                .catch(error => {
                    console.error('Error in POST request:', error);
                });
        }
    }, [publicKey]);

    // const handleTransaction = useCallback(async () => {
    //     if (publicKey) {
    //         const connection = new Connection(clusterApiUrl(WalletAdapterNetwork.Devnet));
    //         const toPublicKey = new PublicKey('CQmDmw1WBnHYxtNAQbmEksf2zm2a63psxth9jBfVe9q3') 
    //         const transaction = new Transaction().add(
    //             SystemProgram.transfer({
    //                 fromPubkey: publicKey,
    //                 toPubkey: toPublicKey,
    //                 lamports: 1 * LAMPORTS_PER_SOL,
    //             })
    //         );
        
    //         try {
    //             const signature = await sendTransaction(transaction, connection);
    //             await connection.confirmTransaction(signature, "processed");
    //             // console.log('Transaction successful with signature:', signature);
    //         } catch (error) {
    //             // console.error('Transaction failed:', error);
    //         }
    //     }
    // }, [publicKey, sendTransaction]);

    // useEffect(() => {
    //     handleTransaction();
    // }, [handleTransaction]);

    return (
        <>  
            <WalletMultiButton />
        </>
    );
};



export default Wallet;
