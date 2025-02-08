"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Question from "../components/Question";
import SubjectNav from "../components/SubjectNav";

export default function Home() {
  const [testData, setTestData] = useState(null);
  const [selectedSection, setSelectedSection] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await fetch("/api/test"); // Fetch test data from MongoDB
        const data = await response.json();

        if (data && data.sections && data.sections.length > 0) {
          setTestData(data);
        } else {
          throw new Error("Invalid test data structure");
        }
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchTestData();
  }, []);

  if (!testData) {
    return <div className="text-center p-4">Loading...</div>; // Show loading until data loads
  }

  const currentSection = testData.sections[selectedSection];
  const currentQuestion = currentSection.questions[selectedQuestion];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SubjectNav
        sections={testData.sections}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setSelectedQuestion={setSelectedQuestion}
      />
      <div className="flex flex-grow">
        <main className="flex-1 p-4">
          <Question
            questionData={currentQuestion}
            setSelectedQuestion={setSelectedQuestion}
            totalQuestions={currentSection.questions.length}
          />
        </main>
        <Sidebar
          questions={currentSection.questions}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
        />
      </div>
    </div>
  );
}
