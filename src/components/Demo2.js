"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/4.jpg";
import img5 from "../../public/5.jpg";
import img6 from "../../public/6.jpg";
import img7 from "../../public/7.jpg";
import img8 from "../../public/8.jpg";
import img9 from "../../public/9.jpg";
import { motion, spring, useAnimation } from "framer-motion";
const Demo2 = () => {
  return (
    <>
      <Container className="py-10">
        <Row>
          <Col xs={4}>
            <div className="flex items-center gap-x-3">
              <motion.div
                animate={{ x: 10, scale: 1.1, transition: { duration: 3 } }}

                // initial={{ rotate: 180, scale: 0 }}
                // animate={{ rotate: 0, scale: 1, transition: { duration: 3 } }}
                // transition={{
                //   type: "spring",
                //   stiffness: 260,
                //   damping: 20,
                // }}
              >
                <Image alt="image1" src={img1} width={300} height={300} />
              </motion.div>
              <div className="flex flex-col gap-5 ms-10 mt-20">
                <motion.div
                  initial={{ scale: 1.5 }}
                  animate={{ x: 10, scale: 1, transition: { duration: 3 } }}
                >
                  <Image
                    alt="image2"
                    src={img2}
                    width={80}
                    height={80}
                    className="ms-16"
                  />
                </motion.div>
                <motion.div animate={{ y: 100, transition: { duration: 3 } }}>
                  <Image alt="image3" src={img3} width={100} height={100} />
                </motion.div>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="flex flex-col gap-4 items-center">
              <motion.div
                animate={{ x: 10, scale: 1.1, transition: { duration: 3 } }}
              >
                <Image alt="image4" src={img4} width={150} height={150} />
              </motion.div>
              <motion.div
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1, transition: { duration: 3 } }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Image alt="image5" src={img5} width={200} height={200} />
              </motion.div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="flex items-center gap-x-7">
              <div className="flex flex-col gap-5 mt-20">
                <motion.div
                  animate={{ x: -40, scale: 1, transition: { duration: 3 } }}
                >
                  <Image alt="image7" src={img6} width={180} height={180} />
                </motion.div>
              </div>
              <motion.div
                animate={{ x: -40, scale: 1, transition: { duration: 3 } }}
              >
                <Image alt="image8" src={img8} width={250} height={250} />
              </motion.div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <div className="flex gap-x-4">
              <motion.div animate={{ y: -100, transition: { duration: 3 } }}>
                <Image
                  alt="image9"
                  src={img9}
                  width={100}
                  height={100}
                  className="mt-28"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image alt="image1" src={img1} width={150} height={150} />
              </motion.div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="mt-3 flex items-center justify-around">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image alt="image1" src={img1} width={100} height={100} />
              </motion.div>
              <motion.div
                animate={{ y: -100, transition: { duration: 3 } }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  alt="image1"
                  src={img1}
                  width={100}
                  height={100}
                  className="mt-10"
                />
              </motion.div>
            </div>
            <motion.div
              animate={{
                y: -20,
                x: 150,
                scale: 0.8,
                transition: { duration: 3 },
              }}
            >
              <Image
                alt="image1"
                src={img1}
                width={50}
                height={50}
                className="mt-3"
              />
            </motion.div>
          </Col>
          <Col xs={4}>
            <div className="flex gap-x-4">
              <motion.div
                animate={{ x: -60, scale: 0.8, transition: { duration: 3 } }}
              >
                <Image
                  alt="image1"
                  src={img7}
                  width={190}
                  height={190}
                  className="mt-3"
                />
              </motion.div>
              <motion.div
                animate={{ x: 10, scale: 1.5, transition: { duration: 3 } }}
              >
                <Image
                  alt="image1"
                  src={img1}
                  width={120}
                  height={120}
                  className="mt-3"
                />
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Demo2;
