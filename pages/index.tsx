import React, {FunctionComponent, useEffect} from 'react'
import { useRouter } from 'next/router'

const Index: FunctionComponent = () => {
  const router = useRouter()

  useEffect(() => {
    const lang = 'fr'

    if (router.asPath === '/') {
      router.push(`/${lang}/Home`)
    } else {
      router.replace('/[lang]', lang)
    }
  })

  return <React.Fragment />
}

export default Index