"use client"

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'
import { FaBirthdayCake, FaGift, FaMusic, FaVolumeMute } from 'react-icons/fa'
import { GiBalloons,  GiPartyPopper } from 'react-icons/gi'
import { RiCake2Line } from 'react-icons/ri'

type ConfettiProps = {
  width: number,
  height: number,
}

const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false })

const candleColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE"]
const ballonsColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE"]
const confettiColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", '#F7DC6F', '#BB8FCE']

export default function BirthdayWish() {
  const [candlesLit, setCandlesLit] = useState<number>(0)
  const [ballonPoppedCount, setBallonPoppedCount] = useState<number>(0)
  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<ConfettiProps>({ width: 0, height: 0 })
  const [celebrating, setCelebrating] = useState<boolean>(false)
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false)
  const [cakeSlices, setCakeSlices] = useState<number>(8)
  const [showWishForm, setShowWishForm] = useState<boolean>(false)
  const [wishMessage, setWishMessage] = useState<string>('')

  const totalCandles: number = 20
  const totalBallons: number = 10

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (candlesLit === totalCandles && ballonPoppedCount === totalBallons) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)
    }
  }, [candlesLit, ballonPoppedCount])

  const lightCandle = (index: number) => {
    if (index === candlesLit) {
      setCandlesLit(prev => prev + 1)
    }
  }

  const popBallon = (index: number) => {
    if (index === ballonPoppedCount) {
      setBallonPoppedCount(prev => prev + 1)
    }
  }

  const cutCakeSlice = () => {
    if (cakeSlices > 0) {
      setCakeSlices(prev => prev - 1)
    }
  }

  const toggleMusic = () => {
    setMusicPlaying(prev => !prev)
  }

  const submitWish = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the wish to a server
    console.log("Wish submitted:", wishMessage)
    setWishMessage('')
    setShowWishForm(false)
  }

  const celebrate = () => {
    setCelebrating(true)
    setShowConfetti(true)
    
    // Light all candles quickly
    for (let i = candlesLit; i < totalCandles; i++) {
      setTimeout(() => {
        setCandlesLit(i + 1)
      }, i * 100)
    }

    // Pop all balloons quickly
    for (let i = ballonPoppedCount; i < totalBallons; i++) {
      setTimeout(() => {
        setBallonPoppedCount(i + 1)
      }, i * 150 + 500)
    }

    setTimeout(() => {
      setShowConfetti(false)
      setCelebrating(false)
    }, 8000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating balloons background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20 pointer-events-none"
          style={{
            color: ballonsColors[i % ballonsColors.length],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GiBalloons />
        </motion.div>
      ))}

      {/* Music control */}
      <button
        className="absolute top-4 right-4 z-50 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all"
        onClick={toggleMusic}
        aria-label={musicPlaying ? "Mute music" : "Play music"}
      >
        {musicPlaying ? <FaVolumeMute className="text-xl" /> : <FaMusic className="text-xl" />}
      </button>

      {/* Animated wrapper for the card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Birthday card */}
        <Card className="mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl border-2 border-black relative">
          {/* Decorative stripe */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

          {/* Floating confetti */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xl"
                style={{
                  color: confettiColors[i % confettiColors.length],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: 360,
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <GiPartyPopper />
              </motion.div>
            ))}
          </div>

          {/* Card header with birthday message */}
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Happy 20th Birthday!
            </CardTitle>
            <CardDescription className="text-2xl font-semibold text-gray-800">
              Muhammad Hassaan
            </CardDescription>
            <p className="text-lg text-gray-600">November 21st</p>
          </CardHeader>

          {/* Card content with candles and balloons */}
          <CardContent className="space-y-8 text-center">
            {/* Interactive cake */}
            <motion.div
              className="mx-auto w-32 h-32 cursor-pointer mb-6 relative"
              whileHover={{ scale: 1.05 }}
              onClick={cutCakeSlice}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-t-full rounded-b-lg shadow-md"></div>
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-t-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                {cakeSlices} {cakeSlices === 1 ? 'Slice' : 'Slices'}
              </div>
            </motion.div>

            {/* Candles section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {candlesLit < totalCandles ? 'Light the candles:' : 'All candles lit! 🎉'}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[...Array(totalCandles)].map((_, index) => (
                  <AnimatePresence key={index}>
                    {(celebrating && index <= candlesLit) || (!celebrating && index < candlesLit) ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                          scale: 1,
                          y: [0, -10, 0]
                        }}
                        exit={{ scale: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: celebrating ? index * 0.1 : 0,
                          y: { repeat: Infinity, duration: 1 + Math.random() }
                        }}
                        className="relative"
                      >
                        {/* Flame animation */}
                        <motion.div
                          className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-4 rounded-full"
                          style={{
                            backgroundColor: candleColors[index % candleColors.length],
                            boxShadow: `0 0 10px ${candleColors[index % candleColors.length]}`
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 0.5 + Math.random(),
                            repeat: Infinity
                          }}
                        />
                        <RiCake2Line
                          className={`w-8 h-8 transition-all duration-300 ease-in-out cursor-pointer hover:scale-125`}
                          style={{ color: candleColors[index % candleColors.length] }}
                          onClick={() => lightCandle(index)}
                        />
                      </motion.div>
                    ) : (
                      <RiCake2Line
                        className={`w-8 h-8 text-gray-300 transition-all duration-300 ease-in-out cursor-pointer hover:scale-125`}
                        onClick={() => lightCandle(index)}
                      />
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>

            {/* Balloons section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {ballonPoppedCount < totalBallons ? 'Pop the balloons:' : 'All balloons popped! 🎈'}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[...Array(totalBallons)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1, y: 0 }}
                    animate={{
                      scale: index < ballonPoppedCount ? 0 : 1,
                      y: index < ballonPoppedCount ? 50 : [0, -15, 0]
                    }}
                    transition={{
                      duration: 0.3,
                      y: {
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className="relative"
                  >
                    <GiBalloons
                      className={`w-10 h-10 cursor-pointer transition-all hover:scale-125`}
                      style={{
                        color: index < ballonPoppedCount ? '#D1D5DB' : ballonsColors[index % ballonsColors.length],
                        filter: index < ballonPoppedCount ? 'none' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                      }}
                      onClick={() => popBallon(index)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Wish form */}
            {showWishForm ? (
              <motion.form
                onSubmit={submitWish}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden pt-4"
              >
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg mb-3"
                  placeholder="Write your birthday wish..."
                  value={wishMessage}
                  onChange={(e) => setWishMessage(e.target.value)}
                  rows={3}
                />
                <div className="flex gap-2 justify-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
                  >
                    Send Wish
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowWishForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </motion.form>
            ) : (
              <Button
                onClick={() => setShowWishForm(true)}
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
              >
                Leave a Wish
              </Button>
            )}
          </CardContent>

          {/* Card footer with celebrate button */}
          <CardFooter className="flex justify-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-all"
              onClick={celebrate}
              disabled={celebrating}
            >
              {celebrating ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="flex items-center"
                >
                  <GiPartyPopper className="mr-2 text-xl" />
                  Celebrating!
                </motion.span>
              ) : (
                <>
                  <FaGift className="mr-2" />
                  Start Celebration!
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Confetti component */}
      {showConfetti && (
        <DynamicConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={800}
          colors={confettiColors}
          gravity={0.2}
        />
      )}
    </div>
  )
}