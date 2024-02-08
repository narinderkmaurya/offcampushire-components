import React from 'react'
import MobileCardItem from './MobileCardItem'

const MobileCardsSection = () => {
  return (
    <div className='flex flex-col gap-8 px-6 pb-4 md:hidden'>
        <MobileCardItem title="$1.5B+" subtitle="trading volume" desc="Working with Alchemy has helped us save the equivalent of 3 full-time engineers, who otherwise would have to be heads down on infra maintenance, at all times." name="Evgeny Yurtaev" designation="CEO & Co-founder" /> 
        <MobileCardItem title="$1.5B+" subtitle="trading volume" desc="Working with Alchemy has helped us save the equivalent of 3 full-time engineers, who otherwise would have to be heads down on infra maintenance, at all times." name="Evgeny Yurtaev" designation="CEO & Co-founder" /> 
        <MobileCardItem title="$1.5B+" subtitle="trading volume" desc="Working with Alchemy has helped us save the equivalent of 3 full-time engineers, who otherwise would have to be heads down on infra maintenance, at all times." name="Evgeny Yurtaev" designation="CEO & Co-founder" /> 
        <MobileCardItem title="$1.5B+" subtitle="trading volume" desc="Working with Alchemy has helped us save the equivalent of 3 full-time engineers, who otherwise would have to be heads down on infra maintenance, at all times." name="Evgeny Yurtaev" designation="CEO & Co-founder" /> 
    </div>
  )
}

export default MobileCardsSection