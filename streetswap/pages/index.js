import { Text, ConnectWallet, Web3Button, useAddress} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import styles from "../styles/Home.module.css";



export default function Home() {
  return (

    <div className={styles.container}>
      <main className={styles.main}>

        <div className = {styles.logo}> 
	        <img src="./StreetSwap_logo.png" width = '300' height = '300'/> 
        </div>

        <h1 className={styles.title}>
          Welcome to StreetSwap!
        </h1>

        <div className={styles.connect}>
          <ConnectWallet/>
        </div>

        <div className = {styles.Web3Button}>  
          <Web3Button
            contractAddress="0x5b085C4fbdA0d1470346d7E044A8deAD3Cf02e57"
            action={ async (contract) => {
              await contract.call("claim", ["0x5b085C4fbdA0d1470346d7E044A8deAD3Cf02e57", 0, 1])
            }}
            onSuccess={(result) => alert("Success!")}
            onError={(result) => alert("Failed To Redeem Ticket")}
          >
            Claim Ticket
          </Web3Button>
        </div>
        
        <div className = {styles.step}>
            <img src="./Wallet_icon.png" width = '150' height = '150' /> 
             
             <img src="./arrow.png" width = '150' height = '150' />

            <img src="./burn.png" width = '150' height = '150' />
            
            <img src="./arrow.png" width = '150' height = '150' />

            <img src="./ticket.png" width = '150' height = '150' flex = '3'/> 
              
        </div>

        <div className = {styles.step}>
          2023 Copyright, COS471 JH, JB, JB                  
        </div>

      </main>
    </div>
  );
}
