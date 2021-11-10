import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: process.env.PUBLIC_URL + "/unity/Build/island.loader.js",
  dataUrl: process.env.PUBLIC_URL +"/unity/Build/island.data",
  frameworkUrl: process.env.PUBLIC_URL +"/unity/Build/island.framework.js",
  codeUrl: process.env.PUBLIC_URL +"/unity/Build/island.wasm",
});

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

export default function Islands() {
  return (
    <PageWrapper gap="lg" justify="center">
      <Unity unityContext={unityContext} style={{
        height: 600,
        width: 960,
        border: "2px solid black",
        background: "grey",
      }}/>
    </PageWrapper>
  )
}
