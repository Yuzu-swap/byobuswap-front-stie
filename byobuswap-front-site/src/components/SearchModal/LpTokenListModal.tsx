import { Currency, Token, StakePool } from '@liuxingfeiyu/byobu-sdk'
import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import useLast from '../../hooks/useLast'
import Modal from '../Modal'
import { CurrencySearch } from './CurrencySearch'
import { ImportToken } from './ImportToken'
import usePrevious from 'hooks/usePrevious'
import Manage from './Manage'
import { TokenList } from '@uniswap/token-lists'
import { ImportList } from './ImportList'
import Column from '../Column'
import styled from 'styled-components'
import LpTokenList from './LpTokenList'
import AutoSizer from 'react-virtualized-auto-sizer'
import { useAllTokens, useToken, useIsUserAddedToken, useFoundOnInactiveList } from '../../hooks/Tokens'
import { filterTokens, useSortedTokensByQuery } from './filtering'
import { useTokenComparator } from './sorting'
import useToggle from 'hooks/useToggle'
import { FixedSizeList } from 'react-window'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import Row, { RowBetween, RowFixed } from '../Row'
import { CloseIcon, TYPE, ButtonText, IconWrapper } from '../../theme'
import { Text } from 'rebass'
import { useTranslation } from 'react-i18next'
import { useMyAllStakePoolList,useMyAllYuzuParkExtList } from 'data/ZooPark'

const ContentWrapper = styled(Column)`
  width: 100%;
  flex: 1 1;
  position: relative;
`

interface LpTokenListModalProps {
  isOpen: boolean
  onDismiss: () => void
  selectedPool?: StakePool | null
  onPoolSelect: (pool: StakePool) => void
  showCommonBases?: boolean
}


export default function LpTokenListModal({
  isOpen,
  onDismiss,
  onPoolSelect,
  selectedPool,
  showCommonBases = false
}: LpTokenListModalProps) {

  const handlePoolSelect = useCallback(
    (pool: StakePool) => {
      onPoolSelect(pool)
      onDismiss()
    },
    [onDismiss, onPoolSelect]
  )

  // change min height if not searching
  const minHeight = 80

  const {t} = useTranslation()

  // menu ui
  const [open, toggle] = useToggle(false)
  const node = useRef<HTMLDivElement>()
  useOnClickOutside(node, open ? toggle : undefined)

  const [poolList, statics] = useMyAllStakePoolList()
  const [poolExtList,extStatics] = useMyAllYuzuParkExtList()

  const pools : StakePool[] = [...poolList, ...poolExtList]

  const allTokens = useAllTokens()
  const [invertSearchOrder] = useState<boolean>(false)
  const tokenComparator = useTokenComparator(invertSearchOrder)
 
  const allArrayTokens: Token[] = useMemo(() => {
    return filterTokens(Object.values(allTokens), "")
  }, [allTokens])

  const sortedTokens: Token[] = useMemo(() => {
    return allArrayTokens.sort(tokenComparator)
  }, [allArrayTokens, tokenComparator])

  const fixedList = useRef<FixedSizeList>()

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={80} minHeight={minHeight}>
      <ContentWrapper>
        <RowBetween style={{padding: "10px 20px"}}>
          <Text fontWeight={500} fontSize={16}  color={"rgba(255, 255, 255, 0.6)"}>
            Select A LP Token
          </Text>
          <CloseIcon onClick={onDismiss} color={"rgba(255, 255, 255, 1)"} />
        </RowBetween>
          <div style={{ flex: '1' }}>
              <AutoSizer disableWidth>
              {({ height }) => (
                  <LpTokenList
                      height={height}
                      pools={pools}
                      onPoolSelect={handlePoolSelect}
                      selectedpool={selectedPool}
                      fixedListRef={fixedList}
                  />
                  )}
              </AutoSizer>
          </div>
      </ContentWrapper>
      
    </Modal>
  )
}
