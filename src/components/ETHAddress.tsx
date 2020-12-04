import React from 'react'

interface ETHAddressProps {
  address: string
  title?: string
}

const ETHAddress: React.FC<ETHAddressProps> = ({
  address,
  title,
  children,
}) => (
  <a
    title={`View ${address} on Etherscan.io`}
    href={`https://etherscan.io/address/${address}`}
  >
    {children}
  </a>
)

export default ETHAddress
