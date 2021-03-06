import React, { useCallback } from "react";
import { Button, Card } from "antd";
import { useConnection } from "../../contexts/connection";
import { useWallet } from "../../contexts/wallet";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const FaucetView = () => {
  const connection = useConnection();
  const { wallet } = useWallet();

  const airdrop = useCallback(() => {
    connection.requestAirdrop(wallet.publicKey, 1 * LAMPORTS_PER_SOL);
  }, [wallet, connection]);

  const bodyStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <div className="flexColumn" style={{ flex: 1 }}>
      <Card title={"Faucet"} bodyStyle={bodyStyle} style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="deposit-input-title" style={{ margin: 10 }}>
            This Faucet will help you fund your accounts outside of Solana main
            network.
          </div>
          <Button type="primary" onClick={airdrop}>
            Give me SOL
          </Button>
        </div>
      </Card>
    </div>
  );
};
