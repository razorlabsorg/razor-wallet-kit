import { Aptos } from '@aptos-labs/ts-sdk';
import { AptosCoinResource } from '../../common/AptosCoinResource';

export interface IAccountCoinManager {
  getOwnedCoins(address: string): Promise<AptosCoinResource[]>;
  getBalance(address: string): Promise<bigint>;
  getAptosClient(): Aptos;
  setAptosClient(suiClient: Aptos): void;
}
