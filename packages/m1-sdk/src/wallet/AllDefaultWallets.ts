import * as presets from './preset-wallets';

export const AllDefaultAptosWallets = [
  presets.RazorAptosWallet,
  presets.NightlyWallet,
  ...[presets.PetraWallet].sort((a, b) => (a.name < b.name ? -1 : 1)),
];
