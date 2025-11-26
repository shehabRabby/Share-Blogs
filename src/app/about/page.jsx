import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Where Stories Find a Home</h1>
          <h2 className={styles.imgDesc}>
            StoryNest – A simple space to write, share & inspire.
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            StoryNest is a cozy corner of the internet built for writers,
            storytellers, and anyone who just wants to express their thoughts.
            Our goal is simple — make sharing ideas effortless, meaningful, and
            honestly… kinda fun. Here, every voice matters and every note has a
            place.
            <br />
            <br />
            Whether you’re writing long stories, quick thoughts, or moments from
            your everyday life, SareNote gives you the space to create freely
            and connect with others through words.
            <br />
            <br />
            We believe that everyone has a story worth sharing. SareNote was
            created to give that story a home — a clean, calm space where
            creativity flows without distractions. No noise, no overwhelm, just
            pure expression.
            <br />
            <br />
            From personal reflections to creative ideas, SareNote helps your
            voice reach people who actually care. Write at your own pace,
            publish what feels right, and build your own little corner of the
            internet — one note at a time.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We built StoryNest to make writing feel natural and enjoyable.
            Everything you need as a creator is right here:
            <br />
            <br /> - Clean & distraction-free writing experience
            <br />
            <br /> - Easy tools to publish and organize blogs
            <br />
            <br /> - Smooth, fast and responsive interface
            <br />
            <br /> - A space where your thoughts can reach people
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
