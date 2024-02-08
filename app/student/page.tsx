"use client";

import StudentHero from '@/components/Student-Hero'
import Ultimate from '@/components/Ultimate'
import React from 'react'
import Card from "@/components/Slider"
import Navbar from '@/components/Navbar/Navbar';
export default function page() {
  return (
    <div>
      <Navbar/>
      <StudentHero/>
      <Card/>
    </div>
  )
}
