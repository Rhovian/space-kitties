<script setup lang="ts">
  import * as web3 from '@solana/web3.js'
  import * as anchor from '@project-serum/anchor'
  import { ref } from 'vue'
  import {
    CandyMachine,
    getCandyMachineState,
    awaitTransactionSignatureConfirmation,
    mintOneToken,
  } from '../candyMachine'
  import { onMounted, defineProps } from '@vue/runtime-core'
  import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-vue'

  const props = defineProps({
    candyMachineId: anchor.web3.PublicKey,
    treasury: anchor.web3.PublicKey,
    config: anchor.web3.PublicKey,
    txTimeout: Number,
  })

  // eslint-disable-next-line no-unused-vars
  let connection: web3.Connection | null = null
  const anchorWallet = useAnchorWallet()
  const { connected } = useWallet()
  let isSoldOut = ref(false)
  let isMinting = ref(false)
  let isActive = ref(false)
  //
  let candyMachine: CandyMachine | undefined
  let itemsAvailable = ref(0)
  let itemsRedeemed = ref(0)
  let itemsRemaining = ref(0)
  let goLiveDate = ref(0)

  onMounted(() => {
    connection = connectChain()
  })

  const connectChain = () => {
    return new anchor.web3.Connection(process.env.VUE_APP_SOLANA_RPC_HOST!)
  }

  const refreshCandyMachineState = async () => {
    try {
      await getCandyMachineState(
        anchorWallet.value! as anchor.Wallet,
        props.candyMachineId,
        connection!,
      )?.then((data) => {
        candyMachine = data?.candyMachine
        itemsAvailable.value = data?.itemsAvailable!
        itemsRedeemed.value = data?.itemsRedeemed!
        itemsRemaining.value = data?.itemsRemaining!
        goLiveDate.value = data?.goLiveDate!

        isSoldOut.value = itemsRemaining.value === 0
      })
    } catch (e) {
      console.log(e)
    }
  }

  const onMint = async () => {
    await refreshCandyMachineState()
    try {
      isMinting.value = true
      if (anchorWallet.value && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          anchorWallet.value.publicKey,
          props.treasury,
        )

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout!,
          connection!,
          'singleGossip',
          false,
        )

        if (!status?.err) {
          console.log('MINT SUCCESS')
        }
      }
    } catch (error: any) {
      // TODO: blech:
      // eslint-disable-next-line no-unused-vars
      let message = error.msg || 'Minting failed! Please try again!'
      if (!error.msg) {
        // eslint-disable-next-line no-empty
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`
          isSoldOut.value = true
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`
        }
      }
    } finally {
      isMinting.value = false
      refreshCandyMachineState()
    }
  }
</script>

<template>
  <div class="mint-wrapper">
    <div class="mint-section-wrapper">
      <div class="mint-title">Start Your Journey!</div>
      <div class="mint-text-wrapper">
        <div class="mint-text">
          <div class="mint-text-title">Mint Price</div>
          <div class="mint-text-text">.5 SOL</div>
        </div>
      </div>
      <div class="mint-text">
        <div class="mint-text-title minted">0/6666 Minted</div>
      </div>
      <div class="connect-mint-wrapper">
        <button
          v-if="connected"
          :disabled="isSoldOut || isMinting || isActive"
          @click="onMint"
        >
          Mint
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.mint-wrapper {
  background: url("../assets/Clouds_1.gif");
}
.mint-section-wrapper {
  width: 75%;
  height: 60vh;
  margin: 10em auto;
  border: 2px solid #fe019a;
  filter: drop-shadow(0 0 0.1rem #fe019a);
  display: flex;
  flex-direction: column-reverse;
  padding: 2em 0;
  background: rgb(254, 1, 154, 0.1)
    url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
    center;
  line-height: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
}
button {
  position: relative;
  border: 2px solid #c54ddd;
  letter-spacing: -1px;
  color: #d1b7db;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 1px 1px #531f7b;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Press Start 2P", cursive;
  margin-left: 1em;

  padding: 13px 35px 10px 35px;
  border-radius: 100px;

  box-shadow: inset 0 -2px 6px 3px #b348cc, 0 -1px 1px rgba(158, 100, 166, 0.5),
    0 2px 3px rgba(0, 0, 0, 0.5), 0 0 0 10px rgba(60, 60, 60, 0.2);

  background-color: rgb(67, 26, 76, 0.5);

  background: linear-gradient(
      to left,
      rgba(167, 64, 180, 0.3) 0%,
      rgba(124, 48, 161, 0.3) 85%,
      rgba(165, 64, 183, 0.3) 99%
    ),
    linear-gradient(
      to left,
      rgba(167, 64, 180, 0) 0%,
      rgba(240, 240, 240, 0) 92%,
      rgba(240, 240, 240, 0.1) 99%
    ),
    linear-gradient(
      to left,
      rgba(167, 64, 180, 0.3) 0%,
      rgba(124, 48, 161, 0.3) 85%,
      rgba(165, 64, 183, 0.3) 99%
    ),
    linear-gradient(
      to left,
      rgba(167, 64, 180, 0) 0%,
      rgba(240, 240, 240, 0) 96%,
      rgba(240, 240, 240, 0.1) 99%
    ),
    linear-gradient(
      from top,
      rgba(167, 64, 180, 0) 0%,
      rgba(124, 48, 161, 1) 75%,
      rgba(197, 77, 221, 0.7) 95%
    );

  transition: all 0.337s ease-in-out;
}

button:before {
  position: absolute;
  bottom: -12px;
  left: 15%;
  z-index: -1;
  content: "";
  height: 50%;
  width: 70%;
}

button:after {
  position: absolute;
  top: -62.5%;
  left: -37.5%;
  z-index: -1;
  content: " ";
  height: 225%;
  width: 175%;

  background: radial-gradient(
    farthest-corner,
    ellipse farthest-corner,
    rgba(83, 20, 121, 0.2) 0%,
    rgba(0, 0, 0, 1) 75%
  );
}

button:hover {
  color: #fff;

  box-shadow: inset 0 -2px 6px 3px #b348cc, 0 -1px 1px rgba(158, 100, 166, 0.5),
    0 2px 3px rgba(0, 0, 0, 0.5), 0 2px 3px rgba(67, 26, 76, 0.7),
    0 0 0 14px rgba(67, 26, 76, 0.3), 0 0 0 8px rgba(67, 26, 76, 0.2);

  background-color: rgba(255, 255, 255, 0.25);
}
.mint-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
  padding-top: 1em;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
  padding: 0.5em 1em 3em 1em;
}
.mint-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 75%;
  line-height: unset;
}
.mint-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.mint-text-title {
  font-family: "Orbitron", sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #92d3cd;
}
.mint-text-text {
  width: 100%;
  font-family: "Orbitron", sans-serif;
  display: flex;
  justify-content: center;
  color: #92d3cd;
}
@media screen and (min-width: 1024px) {
  .mint-title {
    font-size: 2em;
  }
  .mint-text-wrapper {
    flex-direction: row;
  }
  .mint-text {
    flex-direction: column;
    height: 100%;
  }
  .mint-text-text {
    height: 100%;
    font-size: 1.25em;
  }
  .mint-text-title {
    height: 100%;
    font-size: 1.25em;
  }
  .minted {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
  }
}
@media screen and (min-width: 1200px) {
  .mint-text-text {
    font-size: 1.75em;
    align-items: center;
  }
  .mint-text-title {
    font-size: 1.75em;
    align-items: center;
  }
}
@media screen and (min-width: 1400px) {
  .mint-section-wrapper {
    padding: 3em 0;
  }
}
@media screen and (min-width: 1600px) {
  .mint-title {
    font-size: 2.5em;
  }
  .mint-text-text {
    font-size: 2.25em;
  }
  .mint-text-title {
    font-size: 2.25em;
  }
}
@media screen and (min-width: 1900px) {
  .mint-text-text {
    font-size: 2.5em;
  }
  .mint-text-title {
    font-size: 2.5em;
  }
  .mint-section-wrapper {
    padding: 3.5em 0;
  }
  .mint-title {
    font-size: 3em;
  }
}
</style>
