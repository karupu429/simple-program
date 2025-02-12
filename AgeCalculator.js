import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [adWatched, setAdWatched] = useState(false);

  const watchAd = () => {
    // Simulating a video ad (Replace with real ad integration)
    alert("Please watch the full ad to continue.");
    setTimeout(() => {
      alert("Ad completed!");
      setAdWatched(true);
    }, 5000); // Simulating a 5-second ad
  };

  const calculateAge = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();
    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();

    if (ageDays < 0) {
      ageMonths--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += prevMonth.getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
    setAge(`${ageYears} years, ${ageMonths} months, ${ageDays} days`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Age Calculator</h1>
        {!adWatched ? (
          <Button onClick={watchAd} className="w-full bg-red-500 hover:bg-red-600">Watch Ad to Continue</Button>
        ) : (
          <>
            <Label className="text-sm font-medium">Enter Your Birthdate:</Label>
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mt-2 mb-4 w-full p-2 border rounded-lg"
            />
            <Button onClick={calculateAge} className="w-full bg-blue-500 hover:bg-blue-600">Calculate Age</Button>
            {age && <p className="mt-4 text-lg text-center">Your Age: {age}</p>}
          </>
        )}
      </div>
    </div>
  );
}
