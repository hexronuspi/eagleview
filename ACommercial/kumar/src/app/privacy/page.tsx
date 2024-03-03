"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";

export default function App() {
  const content1 = "This is the answer to Privacy Policy 1.";
  const content2 = "This is the answer to Privacy Policy 2.";
  const content3 = "This is the answer to Privacy Policy 3.";
  const content4 = "This is the answer to Privacy Policy 4.";
  const content5 = "This is the answer to Privacy Policy 5.";

  return (
    <main>
      <NavBar/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 my-8">
          Privacy Policy
        </h2>
        <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Privacy Policy 1" title="Privacy Policy 1">
            {content1}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Privacy Policy 2" title="Privacy Policy 2">
            {content2}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Privacy Policy 3" title="Privacy Policy 3">
            {content3}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Privacy Policy 4" title="Privacy Policy 4">
            {content4}
          </AccordionItem>
          <AccordionItem key="5" aria-label="Privacy Policy 5" title="Privacy Policy 5">
            {content5}
          </AccordionItem>
        </Accordion>
      </div>
      <Footer/>
    </main>
  );
}