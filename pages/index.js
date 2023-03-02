import Head from 'next/head';
import { Carousel } from '@mantine/carousel';
import { Drawer } from '@mantine/core';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Drawer opened>
          <Carousel slideSize="70%" slideGap="md" className="">
            <Carousel.Slide key="Slide 2">
              <div className="bg-red p-12">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide key="Slide 3">
              <div className="bg-red p-12">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide key="Slide 4">
              <div className="bg-red p-12">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide key="Slide 5">
              <div className="bg-red p-12">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </Drawer>
        <Drawer opened position="right">
          <Carousel slideSize="70%" slideGap="md" className="mt-8">
            <Carousel.Slide key="Slide 2">
              <div className="bg-red">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide key="Slide 3">
              <div className="bg-red">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide key="Slide 4">
              <div className="bg-red">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide key="Slide 5">
              <div className="bg-red">
                <div>Hello</div>
                <div>Hello</div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </Drawer>
      </main>
    </>
  );
}
