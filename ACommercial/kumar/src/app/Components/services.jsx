"use client"
import React from "react";
import { useViewport } from "react-viewport-hooks";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useSpring, animated } from "react-spring";
export default function Services() {
  const { width } = useViewport();
  const isMobile = width < 640;

  const props = useSpring({ opacity: 1, from: { opacity: 0.8} });

  const list = [
    {
      title: "Service Heading",
      text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
    },
    {
        title: "Service Heading",
        text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
      },
      {
        title: "Service Heading",
        text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
      },
      {
        title: "Service Heading",
        text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
      },
      {
        title: "Service Heading",
        text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
      },
      {
        title: "Service Heading",
        text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
      },
      {
        title: "Service Heading",
        text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
      },
      {
        title: "Service Heading",
        text: "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Quisquam Consequatur Necessitatibus Eaque."
      },
  ];

  return (
    <div className="p-4">
              <animated.h1 style={props} className="text-4xl text-center mb-4">Our Services</animated.h1>
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
