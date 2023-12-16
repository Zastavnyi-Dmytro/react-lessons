import React from 'react'

function CapsulesItem({capsule}) {
  console.log(capsule)
  return (
    <div>
      <h2>{capsule.capsule_id}</h2>
      <p>ID: {capsule.capsule_serial}</p>
      <p>Type: {capsule.type}</p>
      <p>Status: {capsule.status}</p>
      <hr />
    </div>
  )
}

export default CapsulesItem
