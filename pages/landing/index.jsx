import React from 'react'
import Head from '../../Components/landingComps/head'
import LearnCard from '../../Components/landingComps/learnCard'
import BlogCard from '../../Components/landingComps/blogCard'
import TeamCard from '../../Components/landingComps/teamCard'
import NftCard from '../../Components/landingComps/nftCard'
import UserCard from '../../Components/landingComps/userCard'
import Accordian from '../../Components/landingComps/accordian'
import Newsletter from '../../Components/landingComps/newsLetter'
import Footer from '../../Components/footer'
import Fade from 'react-reveal/Fade'
import learnIcon from '../../images/learn.png'
import supportIcon from '../../images/guidesMain.png'
import PaymentMethod from '../../images/crypto.png'
import tools from '../../images/news.png'
import Blog1 from '../../images/nftqs.jpeg'
import Blog2 from '../../images/metamask.png'
import Blog3 from '../../images/cryptoquestion.jpeg'
import invest from '../../images/investt.png'
import user1 from '../../images/jayceFounder.png'
import user2 from '../../images/tonyFounder.jpeg'

export default function Index() {
  const learnCards = [
    {
      img: learnIcon,
      title: 'Learn About NFTs',
      p1: 'What is an NFT?',
      p2: 'Why does NFT art have value?',
      p3: 'OpenSea Review',
    },
    {
      img: PaymentMethod,
      title: 'Buy Your First NFT With Your Metamask Wallet',
      p1: 'How to buy NFTs',
      p2: 'Best NFT Marketplace',
    },
    {
      img: supportIcon,
      title: 'Helpful Tools and Guides',
      p1: 'Coming Soon',
    },
    {
      img: tools,
      title: 'Get News Before Anyone Else',
      p1: 'Join our discord (Coming Soon)?',
    },
  ]
  const blogs = [
    {
      title: 'What are NFTs? How to get involved?',
      img: Blog1,
    },
    {
      title: 'How to setup a Metamask wallet!',
      img: Blog2,
    },
    {
      title: 'Whats Crypto?',
      img: Blog3,
    },
  ]

  const team = [
    {
      title: 'Learn',
      des: 'Gain the necessary knowledge to get started in this new found web. Visit our guides to figure out where to begin!',
      img: invest,
    },
    {
      title: 'Invest',
      des: 'Once you learn and gain the knowledge on how to begin your journey into this new web. Take that new knowledge invest on your own!',
      img: invest,
    },
    {
      title: 'Stay Up to Date',
      des: 'We do the research so you dont. Simply visit our website to see whats news has been released!',
      img: invest,
    },
  ]
  const user = [
    {
      name: 'Anthony Flores',
      pos: 'Founder',
      img: user2,
    },
    {
      name: 'Jayce Mroz',
      pos: 'Marketing Manager',
      img: user1,
    },
  ]

  return (
    <>
      <div className="bg_img">
        <div className="container mx-auto mb-8 px-10 ">
          <Head />
        </div>
      </div>
      <div className="container mx-auto mb-8 px-10">
        {' '}
        <div className="container   mb-8 md:px-60 lg:px-60 ">
          <div className="grid justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            {learnCards.map((x) => (
              <LearnCard x={x} />
            ))}
          </div>
        </div>
        <div className="mt-60 text-center">
          <h1 class=" mt-5 w-full text-4xl font-bold  ">
            <Fade up delay={50}>
              Popular blog posts
            </Fade>
          </h1>

          <p className="mt-3">
            <Fade up delay={100}>
              Become part of our ever growing community.
            </Fade>
          </p>
        </div>
        <div className="mt-10 grid justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {blogs.map((x) => (
            <Fade up delay={50}>
              <BlogCard x={x} />
            </Fade>
          ))}
        </div>
        <div className="mt-60 text-center">
          <h1 class=" mt-5 w-full text-4xl font-bold  ">
            <Fade up delay={50}>
              Gain the Knowledge of the Future
            </Fade>
          </h1>
          <p className="text-1xl mt-3 ">
            <Fade up delay={100}>
              Follow along with in depth guides and up to date news to help you
              get information about the future of technology all-in-one
              platfrom.
            </Fade>
          </p>
        </div>
        <div className="mt-20 grid justify-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-5 ">
          {team.map((x) => (
            <Fade up delay={50}>
              <TeamCard x={x} />
            </Fade>
          ))}
        </div>
        <div className="mt-60 text-center">
          <h1 class=" mt-5 w-full text-xl font-bold md:text-3xl lg:text-4xl  ">
            <Fade up delay={50}>
              The Most Popular NFT Collections
            </Fade>
          </h1>
          <p className="text-1xl mt-3 ">
            <Fade up delay={100}>
              Take a look at how and why the most popular collections came
              about!
            </Fade>
          </p>
        </div>
        <div className="mt-20 grid justify-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 ">
          <NftCard />
        </div>
        <div className="mt-60 text-center">
          <h1 class=" mt-5 w-full text-4xl font-bold  ">
            <Fade up delay={50}>
              Our Team
            </Fade>
          </h1>
          <p className="text-1xl mt-3 lg:px-20">
            <Fade up delay={100}>
              We’re a team of college students who are passionate about the
              future of technology and have built a resource to help people on
              their journey to learn the industry. We do our best to simplify
              the world of NFTs, Crypto Currency, Blockchain and the Web 3.0 for
              everyone!
            </Fade>
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-20    ">
          <Fade up delay={100}>
            {user.map((x) => (
              <div>
                <UserCard x={x} />
              </div>
            ))}
          </Fade>
        </div>
        <div className="mt-60 text-center">
          <h1 class=" mt-5 w-full text-xl font-bold md:text-3xl lg:text-5xl  ">
            <Fade up delay={50}>
              Have Any Question ?
            </Fade>
          </h1>
          <p className="text-1xl mt-3 ">
            <Fade up delay={100}>
              We have answers!
            </Fade>
          </p>
        </div>
        <div className="mt-10 grid w-full grid-cols-1  justify-center md:px-40 lg:px-60 ">
          <Fade up delay={150}>
            <Accordian />
          </Fade>
        </div>
        <div className="lg:px-30 mt-60 grid w-full  grid-cols-1 justify-center md:px-40 ">
          <Fade up delay={150}>
            <Newsletter />
          </Fade>
        </div>
      </div>
      {/* <div className="foot_bg">
        <div className=" mt-60  w-full  ">
          <Footer />
        </div>
      </div> */}
    </>
  )
}
