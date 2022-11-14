import { Web3Provider } from '@ethersproject/providers'
import * as sapphire from '@liuxingfeiyu/sapphire-paratime';

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(sapphire.wrap(provider), 'any')
 // const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 3000
  return library
}
