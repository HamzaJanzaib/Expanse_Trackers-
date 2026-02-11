'use client'

import { useState } from 'react'

export function useFamily(initialFamilyId?: string) {
  const [activeFamilyId, setActiveFamilyId] = useState(initialFamilyId)

  return {
    activeFamilyId,
    setActiveFamilyId
  }
}
