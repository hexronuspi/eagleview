"use client"
import React from "react";
import { useViewport } from "react-viewport-hooks";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useSpring, animated } from "react-spring";
export default function Testimonial() {
  const { width } = useViewport();
  const isMobile = width < 640;

  const props = useSpring({ opacity: 1, from: { opacity: 0.8} });

  const list = [
    {
      title: "Sashanka Nayak",
      text: "Best Doctor, She Handled All Complications During My Wife's Journey Of Pregnancy Very Well. Very Patient To Listen Problems And Gives Proper Medication For Remedy. Dr. Nanda's Service Is Very Much Affordable And She Takes Cares Of Every Small Thing For Patients Comfort. Thanks A Lot Doctor."
    },
    {
      title: "Pratiksha Swami",
      text: "Kumar's Polyclinic Is The Best Gynecologist Center In Chembur Mumbai. Dr Nanda R Kumar Is Very Supportive With Her Expertise In The Field And Prompt Response To The Problems. I Am Thankful For Immense Support And Care Taken, By Her."
    },
    {
      title: "Dr Arpita Thamba",
      text: "Dr Nanda Seems Like A Very Experienced Doctor, She Explained Everything In A Very Simplified Manner. She Was Extremely Patient With Me . I Would Definitely Recommend Her."
    },
    {
      title: "Harshalee Lokhande",
      text: "Very Good And Friendly Doctor. She Made Us Comfortable. She Is Very Concerning And Assuring Of Taking Care Of Patients Health Giving Relief At Very First Visit. I Definitely Recommend This Doctor."
    },
    {
      title: "RAMASUBRAMANIAM R",
      text: "Dr. Mrs Nanda R Kumar Gives Best Medical Treatment To Her Patients. She Explains The Problems In A Very Understandable Way And Gives Courage To The Patients. The Medicines Recommended By Her Proved Very Effective Without Any Side Effects. I Wish To Recommend Her To My Friends. My Rating For Her Is Very Excellent."
    },
    {
      title: "Apurva Jadhav",
      text: "Kumar's Polyclinic Is The Best Gynecologist Center In Chembur Mumbai. Dr Nanda Kumar Is The Best Gynecologist."
    },
    {
      title: "Aarti Patel",
      text: "Dr. Nanda R Kumar is an exceptional gynecologist, providing personalized care and addressing all concerns with expertise and compassion. She is a highly skilled and compassionate gynecologist. I highly recommend her for anyone seeking top-notch gynecological care."
    },
    {
      title: "Harshalee Lokhande",
      text: "Very good and friendly doctor. She made us comfortable. She is very concerning and assuring of taking care of patients health giving relief at very first visit. I definitely recommend this Doctor."
    },
  ];

  return (
    <div className="p-4">
              <animated.h1 style={props} className="text-4xl text-center mb-4">Testimonials</animated.h1>
      <div className={`grid gap-4 ${isMobile ? "grid-cols-2" : "sm:grid-cols-3 lg:grid-cols-4"}`}>
        {list.slice(0, isMobile ? 3 : list.length).map((item, index) => (
          <Card shadow="sm" key={index} isPressable >
            <CardBody className="p-4">
              <p className="text-center">{item.text}</p>
            </CardBody>
            <CardFooter className="text-small text-center">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
