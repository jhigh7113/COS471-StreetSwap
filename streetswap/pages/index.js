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
            contractAddress="0xfc4d61E47dBc23e75B6eE8F5859B15Cce11EEc22"
            action={ async (contract) => {
              await contract.call("claim", ["0xEBDCA75b749178DbE751b9D51fEAD789751492Cb", 0, 1])
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
