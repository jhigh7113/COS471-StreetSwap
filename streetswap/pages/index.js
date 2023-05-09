import { ConnectWallet, Web3Button} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>StreetSwap</a>!
        </h1>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

      <Web3Button
        contractAddress="0x5b085C4fbdA0d1470346d7E044A8deAD3Cf02e57"
        action={ async (contract) => {
          await contract.call("claim", ['0xEBDCA75b749178DbE751b9D51fEAD789751492Cb', 0, 1])
        }}
        onSuccess={(result) => alert("success!")}
        onError={(result) => alert("Failed")}
      >
        claim
    </Web3Button>

      </main>
    </div>
  );
}
