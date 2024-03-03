"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image, Divider} from "@nextui-org/react";
import Link from "next/link";

export default function AboutUs() {
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    setOrientation(window.innerWidth > 768 ? "vertical" : "horizontal");
  }, []);

  return (  
    <div className="bg-white-100 min-h-screen pt-6 md:py-12 flex flex-col md:flex-row justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:mr-8">
          <h2 className="text-2xl font-bold text-center mb-8">
           Kumar's Polyclinic - Specialized Gynecological Care
          </h2>
          <div className="text-lg text-gray-800 mx-8 mb-4 text-justify">
            <p>
              Dr. Nanda R Kumar, a distinguished infertility specialist and gynecologist in Chembur, with over 15 years of experience. She is a gynecologist at Kumar’s Polyclinic, a premier gynecological center in the area. Her MBBS from Seth G.S. Medical College & K.E.M. Hospital and membership in the Federation of Obstetric & Gynecological Societies of India underscore her expertise. With a track record of fulfilling numerous parenthood dreams, she's esteemed as a top gynecologist in Kurla. Renowned for her use of innovative techniques and advanced technology, she's revered as the leading ladies' specialist doctor in Sion.
            </p>
          </div>
          <div className="mx-auto px-4 flex flex-row items-center justify-center space-x-4 mb-8">
            <Link href="Appointment">
              <Button color="primary">Book Appointment</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Card className="py-2 w-full md:w-3/3">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h3 className="text-tiny uppercase font-bold">Gynecologist</h3>
              <h6 className="font-bold text-large">Dr. Nanda R. Kumar</h6>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-full"
                src="/images/nanda.jpg"
                width={120}
                height={100}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}