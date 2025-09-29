"use client";

// Import necessary hooks and components
import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/dark-mode";
import { motion } from "framer-motion";

// Countdown component
export default function Countdown() {
    // State to store the user input duration
    const [duration, setDuration] = useState<number | string>("");
    // State to track the remaining time
    const [timeLeft, setTimeLeft] = useState<number>(0);
    // State to check if the countdown is active
    const [isActive, setIsActive] = useState<boolean>(false);
    // State to check if the countdown is paused
    const [isPaused, setIsPaused] = useState<boolean>(false);
    // Reference to store the timer interval
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Function to set the countdown duration
    const handleSetDuration = (): void => {
        if (typeof duration === "number" && duration > 0) {
            setTimeLeft(duration);
            setIsActive(false);
            setIsPaused(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    };

    // Function to start the countdown
    const handleStart = (): void => {
        if (timeLeft > 0) {
            setIsActive(true);
            setIsPaused(false);
        }
    };

    // Function to pause the countdown
    const handlePause = (): void => {
        if (isActive) {
            setIsPaused(true);
            setIsActive(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    };

    // Function to reset the countdown
    const handleReset = (): void => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(typeof duration === "number" ? duration : 0);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };

    // useEffect to handle countdown timer logic
    useEffect(() => {
        if (isActive && !isPaused) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current!);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        // Cleanup function to clear interval when component unmounts
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isActive, isPaused]); // Runs when isActive or isPaused state changes

    // Function to format time in MM:SS format
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    // Function to handle duration input change
    const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setDuration(Number(e.target.value) || "");
    };

    return (
        // Motion div for animation effects
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 animate-fade-in"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md transition-transform duration-500 ease-in-out transform hover:scale-105"
                >
                {/* Dark mode toggle button */}
                <ModeToggle/>
                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
                    Countdown Timer
                </h1>
                <div className="flex items-center mb-6">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileFocus={{ scale: 1.02 }}
                        className="flex-1 mr-4 transition-transform duration-200 ease-in-out transform hover:scale-105 focus-within:scale-105"
                    >
                        {/* Input field for entering duration */}
                        <Input
                            type="number"
                            id="duration"
                            placeholder="Enter duration in seconds"
                            value={duration}
                            onChange={handleDurationChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </motion.div>
                    <Button onClick={handleSetDuration} variant="outline" className="text-gray-800 dark:text-gray-200">
                        Set
                    </Button>
                </div>
            
            <motion.div
                key={timeLeft}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center transition-transform duration-500 ease-in-out"
            >
                {/* Display formatted time */}
                {formatTime(timeLeft)}
            </motion.div>
            <div className="flex justify-center gap-4">
                {/* Start button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                    className="text-gray-800 dark:text-gray-200 transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    {isPaused ? "Resume" : "Start"}
                </motion.button>
                {/* Pause button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePause}
                    className="text-gray-800 dark:text-gray-200 transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    Pause
                </motion.button>
                {/* Reset button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReset}
                    className="text-gray-800 dark:text-gray-200 transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    Reset
                </motion.button>
            </div>
        </motion.div>
    </motion.div >
  );
}
