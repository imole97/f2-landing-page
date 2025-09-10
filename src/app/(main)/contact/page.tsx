"use client";
import Container from "@/components/layout/Container";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/icons";

const Contact = () => {
  return (
    <section className="bg-[#0D102F] pt-36 pb-20">
      <Container className="">
        <div className="bg-[#F4F4F533] text-white rounded-[30px] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Left info panel */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Let’s stay connected
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl">
              Write a short paragraph for inquiries about your product. Also
              inform about how long the users can expect before you reply
            </p>

            <div className="space-y-4 pt-9">
              <div className="bg-white text-black rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <EmailIcon/>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">email@company.com</div>
                </div>
              </div>
              <div className="bg-white text-black rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <PhoneIcon/>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">(+1) 1234 567 891</div>
                </div>
              </div>
              <div className="bg-white text-black rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <LocationIcon/>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Address</div>
                  <div className="font-medium">
                    760 Market St Floor 10, San Francisco, CA 94102, USA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="md:w-1/2">
            <ContactForm className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
