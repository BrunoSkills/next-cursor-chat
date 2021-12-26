
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import '@yomo/react-cursor-chat/dist/cursor-chat.min.css';
// import CursorChat from '../components/types';
import CursorChat from '../components/CursorChat';
import tw from "tailwind-styled-components"





const Home: NextPage = () => {
  return (
    <Wrapper >
  
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet='utf-8' />
                <title>YoMo cursor chat</title>
                <meta name="yomo-next-chat" content="yomo cursor chat app" />
                <meta name="YoMo cursor chat" content="yomo real time cursor chat website-app" />
                <meta name="YoMo" content="YoMo, cursor-chat,chat, real time chat, yomo cursor chat app, @yomo/presencejs, nextjs, reactjs,software, programming, metaverse, websocket" />
                <meta name="YoMo" content="Bruno Soares" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="preconnect" href="https://fonts.googleapis.com"    />
               <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin='true' />
            
            </Head>

            <Main >
                <Image width={100} height={100} src='/logo.png' alt='YoMo logo' />
                <TipsContainer >
                    <Tips>Press <TipsIconOne>/</TipsIconOne> to bring up the input box</Tips> 
                    <Tips>Press <TipsIconTwo>ESC</TipsIconTwo> to close the input box</Tips>
                </TipsContainer>
                <CursorChat 
                    socketURL="wss://ws-dev.yomo.run"
                    avatar={`/cursor-avatar-${new Date().getSeconds() % 9}.png`}
                    theme="light" 
                  />
            </Main>
        </Wrapper>
  )
}

export default Home

const Wrapper = tw.div` min-h-screen max-w-screen flex bg-black`

const Main = tw.main` flex flex-col w-full h-screen justify-center items-center `

const TipsContainer = tw.div`flex justify-center flex-col  mt-5`

const Tips = tw.p`text-white text-center text-md my-2`

const TipsIconOne = tw.span` bg-yellow-300 w-6 h-6 px-3 py-1 text-sm rounded-md text-black`

const TipsIconTwo = tw.span` bg-yellow-300 w-8 h-6 px-2 py-1 text-sm rounded-md text-black`







