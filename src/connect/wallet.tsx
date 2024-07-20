import React, { FC, useEffect, useMemo } from 'react';
import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import axios from 'axios';

const WalletComponent: FC = () => {
    const { publicKey } = useWallet();

    useEffect(() => {
        if (publicKey) {
            const walletAddress = publicKey.toString();
            console.log('Wallet address:', walletAddress);
            localStorage.setItem('walletAddress', walletAddress);
            axios.post('http://localhost:3000/postWallet', { walletAddress })
                .then(response => {
                    console.log('Post request successful:', response.data);
                    // Xử lý kết quả response nếu cần thiết
                })
                .catch(error => {
                    console.error('Error in POST request:', error);
                    // Xử lý lỗi nếu cần thiết
                });
        }
    }, [publicKey]);

    return (
        <>
            <WalletMultiButton />
            {/* <WalletDisconnectButton /> */}
            {/* Your app's components go here, nested within the context providers. */}
        </>
    );
};


export const Wallet: FC = () => {
    // Mạng có thể được đặt là 'devnet', 'testnet', hoặc 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // Có thể cung cấp một endpoint RPC tùy chỉnh.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Ví thực hiện một trong các tiêu chuẩn này sẽ có sẵn tự động.
             *
             *   - Giao thức Bộ điều hợp Ví Di động Solana
             *     (https://github.com/solana-mobile/mobile-wallet-adapter)
             *   - Tiêu chuẩn Ví Solana
             *     (https://github.com/anza-xyz/wallet-standard)
             *
             * Nếu bạn muốn hỗ trợ một ví không hỗ trợ cả hai tiêu chuẩn trên,
             * hãy khởi tạo bộ điều hợp ví cũ của nó ở đây. Các bộ điều hợp phổ biến có thể được tìm thấy
             * trong gói npm `@solana/wallet-adapter-wallets`.
             */
            new UnsafeBurnerWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletComponent />
                    {/* <WalletMultiButton /> */}
                    {/* <WalletDisconnectButton /> */}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default Wallet;
