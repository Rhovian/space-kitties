<template>
    <WalletProvider :wallets="wallets" auto-connect>
      <Navbar />
        <div class="app-inner-wrapper">
            <Home />
            <About />
            <MintSection 
              :treasury="treasury"
              :config="config"
              :candyMachineId="candyMachineId"
              :txTimeout="txTimeout"
            />
            <Lore />
            <Roadmap />
            <RoadmapV2 />
            <Faq />
            <Team />
        </div>
      <FooterVue />
    </WalletProvider>
</template>

<script setup lang="ts">
import Home from "./components/Home.vue";
import * as anchor from '@project-serum/anchor'
import About from "./components/About.vue";
import Lore from "./components/Lore.vue";
import Roadmap from "./components/Roadmap.vue";
import Faq from "./components/Faq.vue";
import Team from "./components/Team.vue";
import FooterVue from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import RoadmapV2 from "./components/RoadmapV2.vue";
import MintSection from "./components/MintSection.vue";
import { WalletProvider } from '@solana/wallet-adapter-vue'
import {
  getPhantomWallet,
  getSolletWallet,
} from '@solana/wallet-adapter-wallets'


const wallets = [getPhantomWallet(), getSolletWallet()]

const treasury = new anchor.web3.PublicKey(
  process.env.VUE_APP_TREASURY_ADDRESS!,
)

const config = new anchor.web3.PublicKey(
  process.env.VUE_APP_CANDY_MACHINE_CONFIG!,
)

const candyMachineId = new anchor.web3.PublicKey(
  process.env.VUE_APP_CANDY_MACHINE_ID!,
)

const txTimeout = 30000 // milliseconds (confirm this works for your project)
</script>

<style>
html {
  overflow-x: hidden;
}

body {
  background: black;
  margin: 0;
  overflow-x: hidden;
}
.app-footer-wrapper {
  position: relative;
  height: 25vh;
}
</style>
